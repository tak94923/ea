import React from 'react';
import { Question, Option } from '../types';
import { CheckCircle2, XCircle } from 'lucide-react';

interface Props {
  question: Question;
  userAnswer: any;
  onChange: (value: any) => void;
  isSubmitted: boolean;
}

export const QuestionRenderer: React.FC<Props> = ({ question, userAnswer, onChange, isSubmitted }) => {
  // Helper to render text with <u> tags as styled underlines
  const renderFormattedText = (text: string) => {
    const parts = text.split(/(<u>.*?<\/u>)/g);
    return (
      <>
        {parts.map((part, i) => {
          if (part.startsWith('<u>') && part.endsWith('</u>')) {
            return (
              <span key={i} className="underline decoration-blue-500 decoration-2 underline-offset-4 font-bold text-slate-900">
                {part.slice(3, -4)}
              </span>
            );
          }
          return <span key={i}>{part}</span>;
        })}
      </>
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 mb-6">
      <h3 className="font-semibold text-lg text-slate-800 mb-2">{question.instruction}</h3>
      {question.text && (
        <p className="text-slate-600 mb-4 bg-slate-50 p-3 rounded font-medium whitespace-pre-wrap leading-relaxed">
          {renderFormattedText(question.text)}
        </p>
      )}
      
      <div>
        {question.type === 'fill_blank' && <TextInputQuestion question={question} value={userAnswer} onChange={onChange} isSubmitted={isSubmitted} />}
        {question.type === 'text_input' && <TextInputQuestion question={question} value={userAnswer} onChange={onChange} isSubmitted={isSubmitted} />}
        {question.type === 'radio' && <RadioQuestion question={question} value={userAnswer} onChange={onChange} isSubmitted={isSubmitted} />}
        {question.type === 'word_order' && <WordOrderQuestion question={question} value={userAnswer} onChange={onChange} isSubmitted={isSubmitted} />}
        {question.type === 'categorize' && <CategorizeQuestion question={question} value={userAnswer} onChange={onChange} isSubmitted={isSubmitted} />}
        {question.type === 'clause_highlight' && <ClauseHighlightQuestion question={question} value={userAnswer} onChange={onChange} isSubmitted={isSubmitted} />}
      </div>
    </div>
  );
};

// --- Sub-components ---

const Feedback: React.FC<{ isCorrect: boolean; answer: any }> = ({ isCorrect, answer }) => {
  return (
    <div className={`mt-4 flex items-start gap-2 p-3 rounded-md ${isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
      {isCorrect ? <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" /> : <XCircle className="w-5 h-5 mt-0.5 shrink-0" />}
      <div>
        <p className="font-bold">{isCorrect ? 'Correct!' : 'Incorrect'}</p>
        {!isCorrect && (
          <p className="text-sm mt-1">
            Answer: <span className="font-semibold">{typeof answer === 'object' ? JSON.stringify(answer).replace(/["{}]/g, '').replace(/,/g, ', ') : answer}</span>
          </p>
        )}
      </div>
    </div>
  );
};

interface SubComponentProps {
  question: Question;
  value: any;
  onChange: (val: any) => void;
  isSubmitted: boolean;
}

const TextInputQuestion: React.FC<SubComponentProps> = ({ question, value, onChange, isSubmitted }) => {
  const currentVal = value || '';
  const isCorrect = currentVal.trim().toLowerCase() === (question.correctAnswer as string).toLowerCase();

  return (
    <div>
      <div className="flex gap-2">
        <input 
          type="text" 
          value={currentVal}
          onChange={(e) => onChange(e.target.value)}
          disabled={isSubmitted}
          className="flex-1 bg-white text-slate-900 border border-slate-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-slate-400 disabled:bg-slate-100 disabled:text-slate-500"
          placeholder={question.placeholder || "Type your answer..."}
        />
      </div>
      {isSubmitted && <Feedback isCorrect={isCorrect} answer={question.correctAnswer} />}
    </div>
  );
};

const RadioQuestion: React.FC<SubComponentProps> = ({ question, value, onChange, isSubmitted }) => {
  const selected = value || '';
  const isCorrect = selected === question.correctAnswer;
  
  // Find text for correct answer for display
  const correctOption = question.options?.find(o => o.id === question.correctAnswer);
  const correctText = correctOption ? correctOption.text : question.correctAnswer;

  // Heuristic: if all options are short (e.g. < 20 chars), use compact layout
  const isCompact = question.options?.every(opt => opt.text.length < 20);

  return (
    <div>
      <div className={isCompact ? "flex flex-wrap gap-2" : "space-y-2"}>
        {question.options?.map(opt => (
          <label 
            key={opt.id} 
            className={`
              flex items-center gap-2 p-3 rounded border cursor-pointer transition bg-white 
              ${selected === opt.id ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500' : 'border-slate-200'} 
              ${isSubmitted ? 'pointer-events-none' : 'hover:bg-slate-50'}
              ${isCompact ? '' : 'w-full'}
            `}
          >
            <input 
              type="radio" 
              name={question.id} 
              value={opt.id}
              checked={selected === opt.id}
              onChange={() => onChange(opt.id)}
              disabled={isSubmitted}
              className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500 shrink-0"
            />
            <span className="text-slate-700 leading-snug">{opt.text}</span>
          </label>
        ))}
      </div>
      {isSubmitted && <Feedback isCorrect={isCorrect} answer={correctText} />}
    </div>
  );
};

const WordOrderQuestion: React.FC<SubComponentProps> = ({ question, value, onChange, isSubmitted }) => {
  const line: Option[] = value || [];
  // Calculate bank based on items not in line. 
  // We use filter on original options to maintain a stable order for the bank.
  const bank = (question.options || []).filter(opt => !line.find(l => l.id === opt.id));

  const moveWord = (word: Option, toLine: boolean) => {
    if (isSubmitted) return;
    if (toLine) {
      onChange([...line, word]);
    } else {
      onChange(line.filter(w => w.id !== word.id));
    }
  };

  const currentSentence = line.map(w => w.text).join(' ');
  const isCorrect = currentSentence.trim() === (question.correctAnswer as string).trim();

  return (
    <div>
      <div className="bg-slate-100 p-4 rounded min-h-[60px] flex flex-wrap gap-2 mb-4 border-2 border-dashed border-slate-300">
        {line.length === 0 && <span className="text-slate-400 italic self-center">Tap words below to build sentence</span>}
        {line.map(word => (
          <button 
            key={word.id}
            onClick={() => moveWord(word, false)}
            disabled={isSubmitted}
            className="bg-white px-3 py-1 rounded shadow-sm text-slate-700 border border-slate-200 hover:border-red-400 hover:text-red-500 transition disabled:opacity-80 disabled:hover:border-slate-200 disabled:hover:text-slate-700"
          >
            {word.text}
          </button>
        ))}
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {bank.map(word => (
          <button 
            key={word.id}
            onClick={() => moveWord(word, true)}
            disabled={isSubmitted}
            className="bg-blue-50 px-3 py-1 rounded shadow-sm text-blue-700 border border-blue-200 hover:bg-blue-100 transition disabled:opacity-50 disabled:hover:bg-blue-50"
          >
            {word.text}
          </button>
        ))}
      </div>
      
      {isSubmitted && <Feedback isCorrect={isCorrect} answer={question.correctAnswer} />}
    </div>
  );
};

const CategorizeQuestion: React.FC<SubComponentProps> = ({ question, value, onChange, isSubmitted }) => {
  const answers: Record<string, string> = value || {};
  const choices = question.choices || [];
  const rows = question.options || [];

  const handleSelect = (id: string, val: string) => {
    onChange({ ...answers, [id]: val });
  };

  const correct = question.correctAnswer as Record<string, string>;
  let isCorrect = true;
  // Check if all keys in correct answer are present and match
  if (Object.keys(answers).length !== Object.keys(correct).length) {
      isCorrect = false;
  } else {
      for (const key of Object.keys(correct)) {
        if (answers[key] !== correct[key]) isCorrect = false;
      }
  }
  // If user hasn't answered anything, treat as incorrect (or handle undefined)
  if (Object.keys(answers).length === 0) isCorrect = false;

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-slate-500 border border-slate-200 mb-4">
          <thead className="text-xs text-slate-700 uppercase bg-slate-50">
            <tr>
              <th className="px-6 py-3 border-b">Logical Relationship</th>
              <th className="px-6 py-3 border-b">Signal Words</th>
            </tr>
          </thead>
          <tbody>
            {question.categories && question.categories.length === 2 && (
               <tr className="bg-slate-50 border-b">
                 <td className="px-6 py-4 font-medium text-slate-900">{question.categories[0]}</td>
                 <td className="px-6 py-4">{question.categories[1]}</td>
               </tr>
            )}
            {rows.map((row) => (
              <tr key={row.id} className="bg-white border-b hover:bg-slate-50">
                <td className="px-6 py-4">
                  <select 
                    className="border border-slate-300 rounded p-1 w-full bg-white text-slate-900 focus:ring-blue-500 focus:border-blue-500 disabled:bg-slate-100"
                    onChange={(e) => handleSelect(row.id, e.target.value)}
                    value={answers[row.id] || ''}
                    disabled={isSubmitted}
                  >
                    <option value="">Select...</option>
                    {choices.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </td>
                <td className="px-6 py-4 font-mono text-slate-700">{row.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isSubmitted && <Feedback isCorrect={isCorrect} answer="Check table matches" />}
    </div>
  );
};

const ClauseHighlightQuestion: React.FC<SubComponentProps> = ({ question, value, onChange, isSubmitted }) => {
  const words = (question.text || "").split(' ');
  const selectedIndices: number[] = value || [];

  const toggleWord = (index: number) => {
    if (isSubmitted) return;
    if (selectedIndices.includes(index)) {
      onChange(selectedIndices.filter(i => i !== index));
    } else {
      onChange([...selectedIndices, index].sort((a, b) => a - b));
    }
  };

  const selectedText = selectedIndices.map(i => words[i]).join(' ');
  // Remove punctuation for easier matching
  const isCorrect = selectedText.replace(/[.,]/g, '') === (question.correctAnswer as string).replace(/[.,]/g, '');

  return (
    <div>
      <div className="leading-loose text-lg mb-4 select-none">
        {words.map((word, idx) => (
          <span 
            key={idx}
            onClick={() => toggleWord(idx)}
            className={`cursor-pointer px-1 py-0.5 rounded mx-0.5 transition ${
              selectedIndices.includes(idx) 
                ? 'bg-yellow-200 text-yellow-900 font-medium ring-1 ring-yellow-300' 
                : isSubmitted ? '' : 'hover:bg-slate-100'
            }`}
          >
            {word}
          </span>
        ))}
      </div>
      {isSubmitted && <Feedback isCorrect={isCorrect} answer={question.correctAnswer} />}
    </div>
  );
};