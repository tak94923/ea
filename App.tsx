import React, { useState, useEffect } from 'react';
import { chapters } from './data';
import { QuestionRenderer } from './components/QuestionRenderer';
import { BookOpen, Menu, ChevronRight, CheckCheck, RefreshCw } from 'lucide-react';

export default function App() {
  const [currentChapterId, setCurrentChapterId] = useState(chapters[0].id);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
  // State for user answers: { questionId: value }
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentChapter = chapters.find(c => c.id === currentChapterId) || chapters[0];

  // Reset answers when chapter changes
  useEffect(() => {
    setAnswers({});
    setIsSubmitted(false);
    // Scroll to top
    const main = document.getElementById('main-content');
    if (main) main.scrollTop = 0;
  }, [currentChapterId]);

  const handleAnswerChange = (questionId: string, value: any) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleSubmit = () => {
    if (isSubmitted) {
      return;
    }
    setIsSubmitted(true);
    // Optional: scroll to top
    const main = document.getElementById('main-content');
    if (main) main.scrollTop = 0;
  };
  
  const handleReset = () => {
      if (window.confirm("Are you sure you want to clear your answers and try again?")) {
        setAnswers({});
        setIsSubmitted(false);
      }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-slate-200 p-4 flex items-center justify-between sticky top-0 z-10">
        <h1 className="font-bold text-slate-800 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-blue-600" />
          ES II Workbook
        </h1>
        <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-slate-100 rounded">
          <Menu className="w-6 h-6 text-slate-600" />
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`
        fixed inset-y-0 left-0 z-20 w-64 bg-white border-r border-slate-200 transform transition-transform duration-200 ease-in-out
        md:translate-x-0 md:static md:h-screen md:overflow-y-auto
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 border-b border-slate-100 hidden md:block">
           <h1 className="font-bold text-xl text-slate-800 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            Workbook
          </h1>
          <p className="text-xs text-slate-500 mt-1">Reading Strategy & Grammar</p>
        </div>
        
        <nav className="p-4 space-y-1">
          {chapters.map(chapter => (
            <button
              key={chapter.id}
              onClick={() => { setCurrentChapterId(chapter.id); setSidebarOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition flex items-center justify-between ${
                currentChapterId === chapter.id 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <span>{chapter.title}</span>
              {currentChapterId === chapter.id && <ChevronRight className="w-4 h-4" />}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main id="main-content" className="flex-1 p-4 md:p-8 overflow-y-auto h-screen scroll-smooth">
        <div className="max-w-3xl mx-auto pb-20">
          <header className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900">{currentChapter.title}</h2>
            <p className="text-slate-500 mt-2">Complete all exercises below, then click "Check All Answers".</p>
          </header>

          <div className="space-y-10">
            {currentChapter.sections.map((section, idx) => (
              <section key={idx} className="space-y-6">
                <div className="flex items-center gap-3 pb-2 border-b border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
                    {section.title.includes('Reading') ? 'RS' : 'GR'}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">{section.title}</h3>
                </div>
                
                <div>
                  {section.questions.map(q => (
                    <QuestionRenderer 
                        key={q.id} 
                        question={q} 
                        userAnswer={answers[q.id]}
                        onChange={(val) => handleAnswerChange(q.id, val)}
                        isSubmitted={isSubmitted}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
          
          <div className="mt-12 flex flex-col items-center gap-4 pb-12">
            {!isSubmitted ? (
                <button 
                    onClick={handleSubmit}
                    className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition shadow-lg text-lg font-semibold w-full md:w-auto justify-center"
                >
                    <CheckCheck className="w-5 h-5" />
                    Check All Answers
                </button>
            ) : (
                <div className="text-center space-y-4">
                    <div className="p-4 bg-blue-50 text-blue-800 rounded-lg">
                        You have submitted your answers. Review the feedback above.
                    </div>
                    <button 
                        onClick={handleReset}
                        className="flex items-center gap-2 bg-slate-200 text-slate-700 px-6 py-2 rounded-lg hover:bg-slate-300 transition text-sm font-medium mx-auto"
                    >
                        <RefreshCw className="w-4 h-4" />
                        Reset & Try Again
                    </button>
                </div>
            )}
          </div>
        </div>
      </main>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-10 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
