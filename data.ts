import { Chapter } from './types';

export const chapters: Chapter[] = [
  {
    id: 'ch7a',
    title: 'Chapter 7a (Page 1)',
    sections: [
      {
        title: 'I. Reading Strategy',
        questions: [
          {
            id: '7a_rs_1',
            type: 'categorize',
            instruction: '選択肢の語を用いて，以下の表を完成させなさい。（1 点 x 5 = 5 点）',
            text: '【選択肢】\ncomparison and contrast\ntime-line\naddition\ncause and effect\nlisting\nexemplification',
            categories: ['論理構成の種類', 'however, but, in contrast'],
            options: [
              { id: '1', text: 'for example, for instance' },
              { id: '2', text: 'and, then, after that' },
              { id: '3', text: 'because, due to' },
              { id: '4', text: 'first, second, third' },
              { id: '5', text: 'also, in addition' },
            ],
            choices: [
              "comparison and contrast", 
              "time-line", 
              "addition", 
              "cause and effect", 
              "listing", 
              "exemplification"
            ],
            correctAnswer: {
              '1': 'exemplification',
              '2': 'time-line',
              '3': 'cause and effect',
              '4': 'listing',
              '5': 'addition'
            } as any
          }
        ]
      },
      {
        title: 'II. Grammar',
        questions: [
          {
            id: '7a_gr_1',
            type: 'fill_blank',
            instruction: '次の（ ）内に日本語にあうように適切な英語を入れなさい。（2 点 x 2 = 4 点）',
            text: '(1) I ( ) Tokyo last Monday. 私は先週の月曜日，東京を訪れた。',
            correctAnswer: 'visited',
            placeholder: 'Type the verb'
          },
          {
            id: '7a_gr_2',
            type: 'fill_blank',
            instruction: '',
            text: '(2) I ( ) Tokyo three times. 私は 3 度，東京を訪れたことがある。',
            correctAnswer: 'have visited', 
            explanation: 'Alternative: have been to'
          }
        ]
      }
    ]
  },
  {
    id: 'ch7b',
    title: 'Chapter 7b (Page 2)',
    sections: [
      {
        title: 'I. Reading Strategy',
        questions: [
          {
            id: '7b_rs_1',
            type: 'text_input',
            instruction: '英文中の signal word の機能として適切なものを，選択肢の a〜f から選びなさい。（1 点 x 3 = 3 点）',
            text: '(1) The train was delayed <u>due to</u> the heavy rain. [ ]\n\n選択肢:\na. 時系列(time-line)\nb. 追加(addition)\nc. 列挙(listing)\nd. 例示(exemplification)\ne. 比較・対照(comparison and contrast)\nf. 原因・結果(cause and effect)',
            correctAnswer: 'f',
            placeholder: 'Enter symbol (a-f)'
          },
          {
            id: '7b_rs_2',
            type: 'text_input',
            instruction: '',
            text: '(2) Many artists died young. <u>For instance</u>, Mozart died when he was thirty-five years old. [ ]\n\n選択肢:\na. 時系列(time-line)\nb. 追加(addition)\nc. 列挙(listing)\nd. 例示(exemplification)\ne. 比較・対照(comparison and contrast)\nf. 原因・結果(cause and effect)',
            correctAnswer: 'd',
            placeholder: 'Enter symbol (a-f)'
          },
          {
            id: '7b_rs_3',
            type: 'text_input',
            instruction: '',
            text: '(3) My grandmother’s soup is nice to eat because it not only has all the essential nutrients but <u>also</u> tastes like home. [ ]\n\n選択肢:\na. 時系列(time-line)\nb. 追加(addition)\nc. 列挙(listing)\nd. 例示(exemplification)\ne. 比較・対照(comparison and contrast)\nf. 原因・結果(cause and effect)',
            correctAnswer: 'b',
            placeholder: 'Enter symbol (a-f)'
          }
        ]
      },
      {
        title: 'II. Grammar',
        questions: [
          {
            id: '7b_gr_1',
            type: 'radio',
            instruction: '次の英文のニュアンスとしてより適切な説明文（a か b）を選びなさい。（1 点 x 3 = 3 点）',
            text: '(1) Judy <u>came</u> to Japan five days ago.',
            options: [
              { id: 'a', text: 'a. ジュディは今、日本にいるか分からない。' },
              { id: 'b', text: 'b. ジュディは今も日本にいる。' }
            ],
            correctAnswer: 'a'
          },
          {
            id: '7b_gr_2',
            type: 'radio',
            instruction: '',
            text: '(2) John <u>has learned</u> French.',
            options: [
              { id: 'a', text: 'a. ジョンは今、フランス語が話せるか分からない。' },
              { id: 'b', text: 'b. ジョンは今、フランス語が話せる。' }
            ],
            correctAnswer: 'b'
          },
          {
            id: '7b_gr_3',
            type: 'radio',
            instruction: '',
            text: '(3) We <u>have studied</u> enough to pass the exam.',
            options: [
              { id: 'a', text: 'a. 試験はもう終わった。' },
              { id: 'b', text: 'b. 試験はまだこれから。' }
            ],
            correctAnswer: 'b'
          }
        ]
      }
    ]
  },
  {
    id: 'ch8a',
    title: 'Chapter 8a (Page 3)',
    sections: [
      {
        title: 'I. Reading Strategy',
        questions: [
          {
            id: '8a_rs_1',
            type: 'text_input',
            instruction: '次の英文を読み，下線部の表現が指す語または句を抜き出しなさい。（2 点 x 2 = 4 点）',
            text: 'Hoffman and his colleagues have found that games like this can be used to help people ignore pain. (1)<u>They</u> have created a game to help the victims of terrible burns as (2)<u>they</u> go through their painful treatments.',
            correctAnswer: 'Hoffman and his colleagues',
            placeholder: '(1) They'
          },
          {
            id: '8a_rs_2',
            type: 'text_input',
            instruction: '',
            text: 'Hoffman and his colleagues have found that games like this can be used to help people ignore pain. (1)<u>They</u> have created a game to help the victims of terrible burns as (2)<u>they</u> go through their painful treatments.',
            correctAnswer: 'the victims of terrible burns',
            placeholder: '(2) they'
          }
        ]
      },
      {
        title: 'II. Grammar',
        questions: [
          {
            id: '8a_gr_1',
            type: 'word_order',
            instruction: '次の[ ]内の英語を並びかえて、下の日本文に相当する英文を完成しなさい。（2 点 x 2 = 4 点）',
            text: '(1) I went to [ ... ].\n 私は英語を学ぶためにロンドンに行きました。',
            options: [
              { id: '1', text: 'English' },
              { id: '2', text: 'London' },
              { id: '3', text: 'study' },
              { id: '4', text: 'to' }
            ],
            correctAnswer: 'London to study English'
          },
          {
            id: '8a_gr_2',
            type: 'word_order',
            instruction: '',
            text: "(2) It's [ ... ].\n 朝食の時間です。",
            options: [
              { id: '1', text: 'breakfast' },
              { id: '2', text: 'eat' },
              { id: '3', text: 'time' },
              { id: '4', text: 'to' }
            ],
            correctAnswer: 'time to eat breakfast'
          }
        ]
      }
    ]
  },
  {
    id: 'ch8b',
    title: 'Chapter 8b (Page 4)',
    sections: [
      {
        title: 'I. Reading Strategy',
        questions: [
          {
            id: '8b_rs_1',
            type: 'text_input',
            instruction: '次の英文を読み，下線部の表現が指す語または句を抜き出しなさい。（2 点 x 3 = 6 点）',
            text: 'Baby geese will regard the first moving objects (1)<u>they</u> see within 13 to 16 hours after hatching as their mother. So, if they see a man instead of their mother (2)<u>during that period</u>, they will come to see the man as their mother and will follow (3)<u>him</u>.',
            correctAnswer: 'Baby geese',
            placeholder: '(1) they'
          },
          {
            id: '8b_rs_2',
            type: 'text_input',
            instruction: '',
            text: '(Same text as above)',
            correctAnswer: 'within 13 to 16 hours after hatching',
            placeholder: '(2) during that period'
          },
          {
            id: '8b_rs_3',
            type: 'text_input',
            instruction: '',
            text: '(Same text as above)',
            correctAnswer: 'the man',
            placeholder: '(3) him'
          }
        ]
      },
      {
        title: 'II. Grammar',
        questions: [
          {
            id: '8b_gr_1',
            type: 'word_order',
            instruction: '次の[ ]内の英語を並びかえて、下の日本文に相当する英文を完成しなさい。（2 点 x 2 = 4 点）',
            text: '(1) Emma left early [ ... ].\n エマは友人に会うために早く出発しました。',
            options: [
              { id: '1', text: 'her' },
              { id: '2', text: 'see' },
              { id: '3', text: 'to' },
              { id: '4', text: 'friend' }
            ],
            correctAnswer: 'to see her friend'
          },
          {
            id: '8b_gr_2',
            type: 'word_order',
            instruction: '',
            text: '(2) I am [ ... ].\n 私はあなたを助けようとしているのです。',
            options: [
              { id: '1', text: 'to' },
              { id: '2', text: 'you' },
              { id: '3', text: 'help' },
              { id: '4', text: 'trying' }
            ],
            correctAnswer: 'trying to help you'
          }
        ]
      }
    ]
  },
  {
    id: 'ch9a',
    title: 'Chapter 9a (Page 5)',
    sections: [
      {
        title: 'I. Reading Strategy',
        questions: [
          {
            id: '9a_rs_1',
            type: 'text_input',
            instruction: '次の代用表現（e.g., one, do）が指す語または句を，文中から抜き出しなさい。ただし，語形変化が必要な場合もある。（2 点 x 2 = 4 点）',
            text: '(1) I bought this car 10 years ago, and I’m thinking of buying a new <u>one</u>.',
            correctAnswer: 'car',
            placeholder: '"one" refers to...'
          },
          {
            id: '9a_rs_2',
            type: 'text_input',
            instruction: '',
            text: '(2) John’s idea seems to be a good <u>one</u>.',
            correctAnswer: 'idea',
            placeholder: '"one" refers to...'
          }
        ]
      },
      {
        title: 'II. Grammar',
        questions: [
          {
            id: '9a_gr_1',
            type: 'word_order',
            instruction: '次の[ ]内の英語を並びかえて、下の日本文に相当する英文を完成しなさい。（2 点 x 2 = 4 点）',
            text: '(1) A friend invited [ ... ] high school gathering.\n 友だちが私を私たちの高校の集会に誘ってくれた。',
            options: [
              { id: '1', text: 'go' },
              { id: '2', text: 'me' },
              { id: '3', text: 'our' },
              { id: '4', text: 'to' },
              { id: '5', text: 'to' }
            ],
            correctAnswer: 'me to go to our'
          },
          {
            id: '9a_gr_2',
            type: 'word_order',
            instruction: '',
            text: '(2) The dog [ ... ] master again after a long time.\n 犬は久しぶりにまた飼い主に会えて喜んでいた。',
            options: [
              { id: '1', text: 'see' },
              { id: '2', text: 'to' },
              { id: '3', text: 'his' },
              { id: '4', text: 'pleased' },
              { id: '5', text: 'was' }
            ],
            correctAnswer: 'was pleased to see his'
          }
        ]
      }
    ]
  },
  {
    id: 'ch9b',
    title: 'Chapter 9b (Page 6)',
    sections: [
      {
        title: 'I. Reading Strategy',
        questions: [
          {
            id: '9b_rs_1',
            type: 'text_input',
            instruction: '次の代用表現（e.g., one, do）が指す語または句を，文中から抜き出しなさい。ただし，語形変化が必要な場合もある。（2 点 x 2 = 4 点）',
            text: '(1) As we usually <u>do</u>, Beth and I had lunch together yesterday.',
            correctAnswer: 'have lunch together',
            placeholder: '"do" refers to...'
          },
          {
            id: '9b_rs_2',
            type: 'text_input',
            instruction: '',
            text: '(2) “Who said that?” “John <u>did</u>.”',
            correctAnswer: 'said that',
            placeholder: '"did" refers to...'
          }
        ]
      },
      {
        title: 'II. Grammar',
        questions: [
          {
            id: '9b_gr_1',
            type: 'word_order',
            instruction: '次の[ ]内の英語を並びかえて、下の日本文に相当する英文を完成しなさい。（2 点 x 2 = 4 点）',
            text: '(1) It may [ ... ] on time.\n 時間通りに到着するのは難しいかもしれません。',
            options: [
              { id: '1', text: 'to' },
              { id: '2', text: 'be' },
              { id: '3', text: 'arrive' },
              { id: '4', text: 'difficult' }
            ],
            correctAnswer: 'be difficult to arrive'
          },
          {
            id: '9b_gr_2',
            type: 'word_order',
            instruction: '',
            text: '(2) Some websites [ ... ] for free.\n いくつかのウェブサイトでは、無料でニュースを読むことができます。',
            options: [
              { id: '1', text: 'news' },
              { id: '2', text: 'read' },
              { id: '3', text: 'to' },
              { id: '4', text: 'the' },
              { id: '5', text: 'you' },
              { id: '6', text: 'allow' }
            ],
            correctAnswer: 'allow you to read the news'
          }
        ]
      }
    ]
  },
  {
    id: 'ch10a',
    title: 'Chapter 10a (Page 7)',
    sections: [
      {
        title: 'I. Reading Strategy',
        questions: [
          {
            id: '10a_rs_1',
            type: 'text_input',
            instruction: '次の英文における下線部は省略表現である。^ の箇所に省略されている適切な語を補いなさい。(1)は 3 語，(2)は 2 語で答えること。（2 点 x 2 = 4 点）',
            text: '(1) You can eat the cake if you want to ^ .',
            correctAnswer: 'eat the cake',
            placeholder: '(3 words)'
          },
          {
            id: '10a_rs_2',
            type: 'text_input',
            instruction: '',
            text: '(2) When ^ young, Susan was weak.',
            correctAnswer: 'she was',
            placeholder: '(2 words)'
          }
        ]
      },
      {
        title: 'II. Grammar',
        questions: [
          {
            id: '10a_gr_1',
            type: 'radio',
            instruction: '[ ]内に当てはまる最も適切な英単語を、選択肢から選んで書きなさい。（1 点 x 2 = 2 点）',
            text: '(1) Finish your homework [ ] you go out to play.',
            options: [
              { id: 'after', text: 'after' },
              { id: 'although', text: 'although' },
              { id: 'before', text: 'before' },
              { id: 'that', text: 'that' },
              { id: 'whether', text: 'whether' },
              { id: 'despite', text: 'despite' }
            ],
            correctAnswer: 'before'
          },
          {
            id: '10a_gr_2',
            type: 'radio',
            instruction: '',
            text: '(2) Alice is so rich [ ] she has seven cars.',
            options: [
              { id: 'after', text: 'after' },
              { id: 'although', text: 'although' },
              { id: 'before', text: 'before' },
              { id: 'that', text: 'that' },
              { id: 'whether', text: 'whether' },
              { id: 'despite', text: 'despite' }
            ],
            correctAnswer: 'that'
          }
        ]
      }
    ]
  },
  {
    id: 'ch10b',
    title: 'Chapter 10b (Page 8)',
    sections: [
      {
        title: 'I. Reading Strategy',
        questions: [
          {
            id: '10b_rs_1',
            type: 'text_input',
            instruction: '次の英文における下線部は省略表現である。^ の箇所に省略されている適切な語を補いなさい。(1)は 4 語，(2)は 2 語で答えること。（2 点 x 2 = 4 点）',
            text: '(1) I could not go to the party, although I wanted to ^ .',
            correctAnswer: 'go to the party',
            placeholder: '(4 words)'
          },
          {
            id: '10b_rs_2',
            type: 'text_input',
            instruction: '',
            text: '(2) When ^ followed by a stranger, run to a safe place.',
            correctAnswer: 'you are',
            placeholder: '(2 words)'
          }
        ]
      },
      {
        title: 'II. Grammar',
        questions: [
          {
            id: '10b_gr_1',
            type: 'radio',
            instruction: '[ ]内に当てはまる最も適切な英単語を、選択肢から選んで書きなさい。（1 点 x 2 = 2 点）',
            text: '(1) I love Anna [ ] she is married.',
            options: [
              { id: 'however', text: 'however' },
              { id: 'after', text: 'after' },
              { id: 'before', text: 'before' },
              { id: 'although', text: 'although' },
              { id: 'whether', text: 'whether' },
              { id: 'despite', text: 'despite' }
            ],
            correctAnswer: 'although'
          },
          {
            id: '10b_gr_2',
            type: 'radio',
            instruction: '',
            text: '(2) I don’t know [ ] Nobita will marry Shizuka.',
            options: [
              { id: 'however', text: 'however' },
              { id: 'after', text: 'after' },
              { id: 'before', text: 'before' },
              { id: 'although', text: 'although' },
              { id: 'whether', text: 'whether' },
              { id: 'despite', text: 'despite' }
            ],
            correctAnswer: 'whether'
          }
        ]
      }
    ]
  },
  {
    id: 'ch11a',
    title: 'Chapter 11a (Page 9)',
    sections: [
      {
        title: 'I. Reading Strategy',
        questions: [
          {
            id: '11a_rs_1',
            type: 'text_input',
            instruction: '空欄に適切な日本語を書き，以下の文章の要約例を完成させなさい。（2 点 x 2 = 4 点）',
            text: "Do you play games? Have you ever been scolded for losing track of time while you were playing? It’s true that playing games too much is something to be avoided, but some scientists have been studying positive uses of games similar to these familiar ones. University of Washington scientist Hunter G. Hoffman and his colleagues have found that games like this can be used to help people ignore pain. They have created a game to help the victims of terrible burns as they go through their painful treatments.\n\n【要約例】\n研究者の中には，ゲームの [(1) ] について研究している人もいる。",
            correctAnswer: 'プラス面',
            placeholder: '(1) の答え'
          },
          {
            id: '11a_rs_2',
            type: 'text_input',
            instruction: '',
            text: "例えば、ワシントン大学のホフマン氏とその同僚は，[(2) ] の患者を助けるゲーム開発を進めている。",
            correctAnswer: '火傷',
            placeholder: '(2) の答え'
          }
        ]
      },
      {
        title: 'II. Grammar',
        questions: [
          {
            id: '11a_gr_1',
            type: 'clause_highlight',
            instruction: '下記の英文の「従属節」に下線を引きなさい。（1 点 x 3 = 3 点）',
            text: 'While I was in Hawaii , I surfed and ate wonderful Hawaiian food.',
            correctAnswer: 'While I was in Hawaii'
          },
          {
            id: '11a_gr_2',
            type: 'clause_highlight',
            instruction: '',
            text: "Although I'm turning twenty today , I still feel like a child.",
            correctAnswer: "Although I'm turning twenty today"
          },
          {
            id: '11a_gr_3',
            type: 'clause_highlight',
            instruction: '',
            text: 'This is the best thing that I\'ve ever done .',
            correctAnswer: "that I've ever done"
          }
        ]
      }
    ]
  },
  {
    id: 'ch11b',
    title: 'Chapter 11b (Page 10)',
    sections: [
      {
        title: 'I. Reading Strategy',
        questions: [
          {
            id: '11b_rs_1',
            type: 'text_input',
            instruction: '空欄に適切な日本語を書き，以下の文章の要約例を完成させなさい。（2 点 x 3 = 6 点）',
            text: "The Diet on June 13 lowered the age of adulthood from 20 to 18 as part of a package of amendments that will have wide-ranging effects for the country’s 18- and 19-year-olds. The new definition of adulthood will take effect on April 1, 2022. It means people aged 18 and 19 will be able to apply for loans and credit cards without parental consent. They will also be able to apply for a passport. However, the minimum legal age for drinking, smoking and various forms of gambling will remain 20.\n\n【要約例】\n[(1) ] を現在の20歳から...",
            correctAnswer: '成人年齢',
            placeholder: '(1) の答え'
          },
          {
            id: '11b_rs_2',
            type: 'text_input',
            instruction: '',
            text: "...現在の20歳から [(2) ] 歳に引き下げることを盛り込んだ改正民法が 6 月 13 日に成立した。",
            correctAnswer: '18',
            placeholder: '(2) の答え'
          },
          {
            id: '11b_rs_3',
            type: 'text_input',
            instruction: '',
            text: "[(3) ] 年4月1日に施行される。",
            correctAnswer: '2022',
            placeholder: '(3) の答え'
          }
        ]
      },
      {
        title: 'II. Grammar',
        questions: [
          {
            id: '11b_gr_1',
            type: 'clause_highlight',
            instruction: '下記の英文の「従属節」に下線を引きなさい。（1 点 x 3 = 3 点）',
            text: 'Think before you say something hurtful .',
            correctAnswer: 'before you say something hurtful'
          },
          {
            id: '11b_gr_2',
            type: 'clause_highlight',
            instruction: '',
            text: 'I think that John is a talented actor .',
            correctAnswer: 'that John is a talented actor'
          },
          {
            id: '11b_gr_3',
            type: 'clause_highlight',
            instruction: '',
            text: 'The towel I used was dirty .',
            correctAnswer: 'I used'
          }
        ]
      }
    ]
  },
  {
    id: 'ch12a',
    title: 'Chapter 12a (Page 11)',
    sections: [
      {
        title: 'I. Reading Strategy [Review 1]',
        questions: [
          {
            id: '12a_rs_1',
            type: 'text_input',
            instruction: '空欄に適切な日本語を書き，以下の文章の要約例を完成させなさい。（1 点 x 3 = 3 点）',
            text: "Nabi Tajima, the world's oldest person, died of old age in a hospital on April 21 in Kikai, Kagoshima Prefecture, a town official confirmed. She was 117. Born on Aug. 4, 1900, Tajima was the last known person born in the 19th century. \"She passed away as if falling asleep,\" said Tajima's 65-year-old grandson, Hiroyuki. \"I want to tell her, 'Rest well.' \" The U.S.-based Gerontology Research Group says that Chiyo Miyako is now the world's oldest person. Miyako was born on May 2, 1901.\n\n【要約例】\n[(1) ] 県の喜界島に住む世界最高齢の女性、田島ナビさんが 4 月 21 日に亡くなった。",
            correctAnswer: '鹿児島',
            placeholder: '(1) の答え'
          },
          {
            id: '12a_rs_2',
            type: 'text_input',
            instruction: '',
            text: "田島さんは [(2) ] 年 8 月 4 日生まれの 117 歳だった。",
            correctAnswer: '1900',
            placeholder: '(2) の答え'
          },
          {
            id: '12a_rs_3',
            type: 'text_input',
            instruction: '',
            text: "現在は [(3) ] さんが最高齢である。",
            correctAnswer: '都千代',
            placeholder: '(3) の答え'
          }
        ]
      },
      {
        title: 'II. Grammar',
        questions: [
          {
            id: '12a_gr_1',
            type: 'radio',
            instruction: '[ ]内に入る適切な記号を，ア〜エから選びなさい。（1 点 x 2 = 2 点）',
            text: 'ア who did this\nイ before it gets too late\nウ although she is tall\nエ birdsong relaxes people\n\n(1) She likes to wear heels [ ].',
            options: [
                { id: 'ア', text: 'ア' },
                { id: 'イ', text: 'イ' },
                { id: 'ウ', text: 'ウ' },
                { id: 'エ', text: 'エ' }
            ],
            correctAnswer: 'ウ'
          },
          {
            id: '12a_gr_2',
            type: 'radio',
            instruction: '',
            text: 'ア who did this\nイ before it gets too late\nウ although she is tall\nエ birdsong relaxes people\n\n(2) The researchers found that [ ].',
            options: [
                { id: 'ア', text: 'ア' },
                { id: 'イ', text: 'イ' },
                { id: 'ウ', text: 'ウ' },
                { id: 'エ', text: 'エ' }
            ],
            correctAnswer: 'エ'
          }
        ]
      }
    ]
  },
  {
    id: 'ch12b',
    title: 'Chapter 12b (Page 12)',
    sections: [
      {
        title: 'I. Reading Strategy [Review 2]',
        questions: [
          {
            id: '12b_rs_1',
            type: 'text_input',
            instruction: '次の英文を読み，下線部の表現が指す語または句を抜き出しなさい。（2 点 x 2 = 4 点）',
            text: "Nabi Tajima, (1)<u>the world's oldest person</u>, died of old age in a hospital on April 21 in Kikai, Kagoshima Prefecture, a town official confirmed. (2)<u>She</u> was 117. Born on Aug. 4, 1900, Tajima was the last known person born in the 19th century. \"She passed away as if falling asleep,\" said Tajima's 65-year-old grandson, Hiroyuki. \"I want to tell her, 'Rest well.'\"",
            correctAnswer: 'Nabi Tajima',
            placeholder: '(1) the world\'s oldest person'
          },
          {
            id: '12b_rs_2',
            type: 'text_input',
            instruction: '',
            text: '(Same text as above)',
            correctAnswer: 'Nabi Tajima',
            placeholder: '(2) She'
        }
      ]
    },
    {
      title: 'II. Grammar',
      questions: [
        {
          id: '12b_gr_1',
          type: 'radio',
          instruction: '[ ]内に入る適切な記号を，ア〜ウから選びなさい。（1 点 x 2 = 2 点）',
          text: 'ア that I\'ve ever done\nイ before it gets too late\nウ when John entered the room\n\n(1) No one noticed [ ].',
          options: [
                { id: 'ア', text: 'ア' },
                { id: 'イ', text: 'イ' },
                { id: 'ウ', text: 'ウ' }
            ],
          correctAnswer: 'ウ'
        },
        {
          id: '12b_gr_2',
          type: 'radio',
          instruction: '',
          text: 'ア that I\'ve ever done\nイ before it gets too late\nウ when John entered the room\n\n(2) This is the best thing [ ].',
          options: [
                { id: 'ア', text: 'ア' },
                { id: 'イ', text: 'イ' },
                { id: 'ウ', text: 'ウ' }
            ],
          correctAnswer: 'ア'
        }
      ]
    }
  ]
}
];