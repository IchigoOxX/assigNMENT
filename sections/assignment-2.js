const assignment2Content = `
\u003c!-- Assignment 2: GL Transactions --\u003e
\u003cdiv class=\"card-wrapper assignment-wrapper\"\u003e
    \u003c!-- Minimized View (VISIBLE) --\u003e
    \u003cdiv class=\"minimized-card\" onclick=\"restoreCard(this)\"\u003e
        \u003cdiv class=\"min-number\"\u003e2\u003c/div\u003e
        \u003cdiv class=\"min-title en-only\"\u003eGL Document Transactions\u003c/div\u003e
        \u003cdiv class=\"min-title ar-only\"\u003eمعاملات مستندات الأستاذ\u003c/div\u003e
    \u003c/div\u003e

    \u003c!-- Full Card (HIDDEN by default - no inline style) --\u003e
    \u003cdiv class=\"config-card assignment-card\"\u003e
         \u003cbutton class=\"minimize-btn\" onclick=\"minimizeCard(this)\"\u003e−\u003c/button\u003e
        \u003cdiv class=\"assign-tabs\"\u003e
            \u003cbutton class=\"assign-tab-btn active\" onclick=\"switchAssignTab('assign2-task')\"\u003e
                \u003cspan class=\"en-only\"\u003eYour Task\u003c/span\u003e\u003cspan class=\"ar-only\"\u003eالمهمة\u003c/span\u003e
            \u003c/button\u003e
            \u003cbutton class=\"assign-tab-btn\" onclick=\"switchAssignTab('assign2-gui')\"\u003eGUI\u003c/button\u003e
            \u003cbutton class=\"assign-tab-btn\" onclick=\"switchAssignTab('assign2-fiori')\"\u003eFIORI\u003c/button\u003e
        \u003c/div\u003e

        \u003c!-- Task Content (Default) --\u003e
        \u003cdiv id=\"assign2-task\" class=\"assign-content-block active\"\u003e
            \u003cdiv class=\"step-header\"\u003e
                \u003cdiv class=\"step-number en-only\"\u003eTask\u003c/div\u003e
                \u003cdiv class=\"step-number ar-only\"\u003eالمهمة\u003c/div\u003e
                \u003cdiv class=\"step-content\"\u003e
                    \u003ch3 class=\"step-title en-only\"\u003eGL Document Transaction Tasks\u003c/h3\u003e
                    \u003ch3 class=\"step-title ar-only\"\u003eمهام معاملات المستندات\u003c/h3\u003e
                    \u003cp class=\"step-desc en-only\"\u003eComplete document posting exercises using GUI and FIORI.\u003c/p\u003e
                    \u003cp class=\"step-desc ar-only\"\u003eأكمل تمارين ترحيل المستندات عبر GUI و FIORI.\u003c/p\u003e
                \u003c/div\u003e
            \u003c/div\u003e

            \u003c!-- Navigation Cards --\u003e
            \u003cdiv class=\"images-grid\" style=\"margin-bottom: 2rem;\"\u003e
                 \u003cdiv class=\"image-item\" onclick=\"switchAssignTab('assign2-gui')\" style=\"cursor: pointer; text-align: center; padding: 2rem; background: rgba(151, 125, 189, 0.1);\"\u003e
                    \u003cdiv style=\"font-size: 2rem; margin-bottom: 1rem;\"\u003e🖥️\u003c/div\u003e
                    \u003cdiv class=\"image-caption en-only\" style=\"font-size: 1.1rem; color: #ccfbf1;\"\u003eOpen GUI Guide\u003c/div\u003e
                    \u003cdiv class=\"image-caption ar-only\" style=\"font-size: 1.1rem; color: #ccfbf1;\"\u003eفتح دليل GUI\u003c/div\u003e
                    \u003cp style=\"font-size: 0.85rem; color: rgba(255,255,255,0.6); margin-top: 5px;\"\u003eFB50, FV50, FB08\u003c/p\u003e
                \u003c/div\u003e
                \u003cdiv class=\"image-item\" onclick=\"switchAssignTab('assign2-fiori')\" style=\"cursor: pointer; text-align: center; padding: 2rem; background: rgba(45, 212, 191, 0.1);\"\u003e
                     \u003cdiv style=\"font-size: 2rem; margin-bottom: 1rem;\"\u003e📱\u003c/div\u003e
                    \u003cdiv class=\"image-caption en-only\" style=\"font-size: 1.1rem; color: #ccfbf1;\"\u003eOpen FIORI Guide\u003c/div\u003e
                    \u003cdiv class=\"image-caption ar-only\" style=\"font-size: 1.1rem; color: #ccfbf1;\"\u003eفتح دليل FIORI\u003c/div\u003e
                     \u003cp style=\"font-size: 0.85rem; color: rgba(255,255,255,0.6); margin-top: 5px;\"\u003eJournal Entries\u003c/p\u003e
                \u003c/div\u003e
            \u003c/div\u003e

            \u003cdiv class=\"assignment-details\"\u003e
                \u003ch4 class=\"details-title en-only\"\u003eAssignment Tasks\u003c/h4\u003e
                \u003ch4 class=\"details-title ar-only\"\u003eالمهام المطلوبة\u003c/h4\u003e
                \u003cul class=\"details-list\"\u003e
                    \u003cli class=\"en-only\"\u003e\u003cstrong\u003eTask 1:\u003c/strong\u003e Park Document via GUI (FV50)\u003c/li\u003e
                    \u003cli class=\"ar-only\"\u003e\u003cstrong\u003eالمهمة 1:\u003c/strong\u003e إيقاف مستند عبر GUI ‏(FV50)\u003c/li\u003e
                    \u003cli class=\"en-only\"\u003e\u003cstrong\u003eTask 2:\u003c/strong\u003e Post Document via GUI (FB50) - Doc #100000060\u003c/li\u003e
                    \u003cli class=\"ar-only\"\u003e\u003cstrong\u003eالمهمة 2:\u003c/strong\u003e ترحيل مستند عبر GUI ‏(FB50) - حساب ‎#100000060\u003c/li\u003e
                    \u003cli class=\"en-only\"\u003e\u003cstrong\u003eTask 3:\u003c/strong\u003e Post Document via FIORI - Doc #100000063\u003c/li\u003e
                    \u003cli class=\"ar-only\"\u003e\u003cstrong\u003eالمهمة 3:\u003c/strong\u003e ترحيل مستند عبر FIORI - حساب ‎#100000063\u003c/li\u003e
                    \u003cli class=\"en-only\"\u003e\u003cstrong\u003eTask 4:\u003c/strong\u003e Reverse Document via GUI (FB08) - Doc #100000061\u003c/li\u003e
                    \u003cli class=\"ar-only\"\u003e\u003cstrong\u003eالمهمة 4:\u003c/strong\u003e عكس مستند عبر GUI ‏(FB08) - حساب ‎#100000061\u003c/li\u003e
                    \u003cli class=\"en-only\"\u003e\u003cstrong\u003eTask 5:\u003c/strong\u003e Reverse Document via FIORI - Doc #100000064\u003c/li\u003e
                    \u003cli class=\"ar-only\"\u003e\u003cstrong\u003eالمهمة 5:\u003c/strong\u003e عكس مستند عبر FIORI - حساب ‎#100000064\u003c/li\u003e
                    \u003cli class=\"en-only\"\u003e\u003cstrong\u003eTask 6:\u003c/strong\u003e Display Documents via FB03 and FIORI\u003c/li\u003e
                    \u003cli class=\"ar-only\"\u003e\u003cstrong\u003eالمهمة 6:\u003c/strong\u003e عرض المستندات عبر FB03 و FIORI\u003c/li\u003e
                    \u003cli class=\"en-only\"\u003e\u003cstrong\u003eTask 7:\u003c/strong\u003e Change Posted Document via FB02\u003c/li\u003e
                    \u003cli class=\"ar-only\"\u003e\u003cstrong\u003eالمهمة 7:\u003c/strong\u003e تعديل مستند مرحّل عبر FB02\u003c/li\u003e
                    \u003cli class=\"en-only\"\u003e\u003cstrong\u003eTask 8:\u003c/strong\u003e Create user manual documentation\u003c/li\u003e
                    \u003cli class=\"ar-only\"\u003e\u003cstrong\u003eالمهمة 8:\u003c/strong\u003e إعداد دليل المستخدم\u003c/li\u003e
                \u003c/ul\u003e
            \u003c/div\u003e
        \u003c/div\u003e

        \u003c!-- GUI Content --\u003e
        \u003cdiv id=\"assign2-gui\" class=\"assign-content-block\"\u003e
            \u003cbutton onclick=\"switchAssignTab('assign2-task')\" style=\"background:none; border:none; color: rgba(255,255,255,0.6); cursor: pointer; margin-bottom: 1rem; display: flex; align-items: center; gap: 8px; font-size: 0.9rem; padding: 0;\"\u003e
                \u003cspan class=\"en-only\"\u003e← Back to Tasks\u003c/span\u003e
                \u003cspan class=\"ar-only\"\u003e→ العودة للمهام\u003c/span\u003e
            \u003c/button\u003e
            
            \u003cdiv class=\"step-header\"\u003e
                \u003cdiv class=\"step-number\"\u003eGUI\u003c/div\u003e
                \u003cdiv class=\"step-content\"\u003e
                    \u003ch3 class=\"step-title en-only\"\u003eGL Transactions via SAP GUI\u003c/h3\u003e
                    \u003ch3 class=\"step-title ar-only\"\u003eمعاملات الأستاذ عبر GUI\u003c/h3\u003e
                    \u003cp class=\"step-desc en-only\"\u003eUsing accounts: \u003cstrong\u003e1000007\u003c/strong\u003e \u0026 \u003cstrong\u003e400000\u003c/strong\u003e\u003c/p\u003e
                    \u003cp class=\"step-desc ar-only\"\u003eالحسابات: \u003cstrong\u003e1000007\u003c/strong\u003e و \u003cstrong\u003e400000\u003c/strong\u003e\u003c/p\u003e
                \u003c/div\u003e
            \u003c/div\u003e

            \u003c!-- Video Tutorial --\u003e
            \u003cdiv style=\"margin-bottom: 2rem; border-radius: 12px; overflow: hidden; border: 1px solid rgba(45, 212, 191, 0.3);\"\u003e
                \u003cvideo controls style=\"width: 100%; display: block;\"\u003e
                    \u003csource src=\"images/creat document gui.mp4\" type=\"video/mp4\"\u003e
                    Your browser does not support the video tag.
                \u003c/video\u003e
                \u003cdiv style=\"padding: 1rem; background: rgba(10, 40, 35, 0.6); text-align: center;\"\u003e
                    \u003cstrong style=\"color: #2dd4bf;\"\u003e📹 \u003cspan class=\"en-only\"\u003eVideo Tutorial:\u003c/span\u003e\u003cspan class=\"ar-only\"\u003eفيديو تعليمي:\u003c/span\u003e\u003c/strong\u003e 
                    \u003cspan class=\"en-only\"\u003eGL Document Creation via GUI\u003c/span\u003e
                    \u003cspan class=\"ar-only\"\u003eإنشاء مستند الأستاذ عبر GUI\u003c/span\u003e
                \u003c/div\u003e
            \u003c/div\u003e

            \u003cdiv class=\"assignment-details\"\u003e
                \u003ch4 class=\"details-title en-only\"\u003eT-Code Reference\u003c/h4\u003e
                \u003ch4 class=\"details-title ar-only\"\u003eمرجع أكواد المعاملات\u003c/h4\u003e
                \u003ctable style=\"width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;\"\u003e
                    \u003cthead\u003e
                        \u003ctr style=\"background: rgba(45, 212, 191, 0.2);\"\u003e
                            \u003cth class=\"en-only\" style=\"padding: 10px; text-align: left; border: 1px solid rgba(45, 212, 191, 0.3);\"\u003eAction\u003c/th\u003e
                            \u003cth class=\"ar-only\" style=\"padding: 10px; text-align: right; border: 1px solid rgba(45, 212, 191, 0.3);\"\u003eالإجراء\u003c/th\u003e
                            \u003cth style=\"padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.3);\"\u003eT-Code\u003c/th\u003e
                        \u003c/tr\u003e
                    \u003c/thead\u003e
                    \u003ctbody\u003e
                        \u003ctr\u003e
                            \u003ctd class=\"en-only\" style=\"padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);\"\u003ePark\u003c/td\u003e
                            \u003ctd class=\"ar-only\" style=\"padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);\"\u003eإيقاف\u003c/td\u003e
                            \u003ctd style=\"padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);\"\u003e\u003cstrong\u003eFV50\u003c/strong\u003e\u003c/td\u003e
                        \u003c/tr\u003e
                        \u003ctr\u003e
                            \u003ctd class=\"en-only\" style=\"padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);\"\u003ePost\u003c/td\u003e
                            \u003ctd class=\"ar-only\" style=\"padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);\"\u003eترحيل\u003c/td\u003e
                            \u003ctd style=\"padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);\"\u003e\u003cstrong\u003eFB50\u003c/strong\u003e\u003c/td\u003e
                        \u003c/tr\u003e
                        \u003ctr\u003e
                            \u003ctd class=\"en-only\" style=\"padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);\"\u003eReverse\u003c/td\u003e
                            \u003ctd class=\"ar-only\" style=\"padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);\"\u003eعكس\u003c/td\u003e
                            \u003ctd style=\"padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);\"\u003e\u003cstrong\u003eFB08\u003c/strong\u003e\u003c/td\u003e
                        \u003c/tr\u003e
                        \u003ctr\u003e
                            \u003ctd class=\"en-only\" style=\"padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);\"\u003eDisplay\u003c/td\u003e
                            \u003ctd class=\"ar-only\" style=\"padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);\"\u003eعرض\u003c/td\u003e
                            \u003ctd style=\"padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);\"\u003e\u003cstrong\u003eFB03\u003c/strong\u003e\u003c/td\u003e
                        \u003c/tr\u003e
                        \u003ctr\u003e
                            \u003ctd class=\"en-only\" style=\"padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);\"\u003eChange\u003c/td\u003e
                            \u003ctd class=\"ar-only\" style=\"padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);\"\u003eتعديل\u003c/td\u003e
                            \u003ctd style=\"padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);\"\u003e\u003cstrong\u003eFB02\u003c/strong\u003e\u003c/td\u003e
                        \u003c/tr\u003e
                    \u003c/tbody\u003e
                \u003c/table\u003e

                \u003ch4 class=\"details-title en-only\"\u003eProcedures\u003c/h4\u003e
                \u003ch4 class=\"details-title ar-only\"\u003eالإجراءات\u003c/h4\u003e
                \u003cul class=\"details-list\"\u003e
                    \u003cli class=\"en-only\"\u003e\u003cstrong\u003ePark (FV50):\u003c/strong\u003e Enter dates, accounts, amount → Click Park\u003c/li\u003e
                    \u003cli class=\"ar-only\"\u003e\u003cstrong\u003eإيقاف ‏(FV50):\u003c/strong\u003e أدخل التواريخ، الحسابات، المبلغ ← اضغط إيقاف\u003c/li\u003e
                    \u003cli class=\"en-only\"\u003e\u003cstrong\u003ePost (FB50):\u003c/strong\u003e Enter dates, accounts, amount → Click Post\u003c/li\u003e
                    \u003cli class=\"ar-only\"\u003e\u003cstrong\u003eترحيل ‏(FB50):\u003c/strong\u003e أدخل التواريخ، الحسابات، المبلغ ← اضغط ترحيل\u003c/li\u003e
                    \u003cli class=\"en-only\"\u003e\u003cstrong\u003eReverse (FB08):\u003c/strong\u003e Enter Doc#, Company Code, Fiscal Year, Reason → Post\u003c/li\u003e
                    \u003cli class=\"ar-only\"\u003e\u003cstrong\u003eعكس ‏(FB08):\u003c/strong\u003e أدخل رقم المستند، كود الشركة، السنة المالية، السبب ← ترحيل\u003c/li\u003e
                    \u003cli class=\"en-only\"\u003e\u003cstrong\u003eDisplay (FB03):\u003c/strong\u003e Enter Doc#, Company Code, Fiscal Year → View\u003c/li\u003e
                    \u003cli class=\"ar-only\"\u003e\u003cstrong\u003eعرض ‏(FB03):\u003c/strong\u003e أدخل رقم المستند، كود الشركة، السنة المالية ← عرض\u003c/li\u003e
                    \u003cli class=\"en-only\"\u003e\u003cstrong\u003eChange (FB02):\u003c/strong\u003e Enter Doc# → Modify allowed fields → Save\u003c/li\u003e
                    \u003cli class=\"ar-only\"\u003e\u003cstrong\u003eتعديل ‏(FB02):\u003c/strong\u003e أدخل رقم المستند ← عدّل الحقول المسموحة ← حفظ\u003c/li\u003e
                \u003c/ul\u003e
            \u003c/div\u003e
        \u003c/div\u003e

        \u003c!-- FIORI Content --\u003e
        \u003cdiv id=\"assign2-fiori\" class=\"assign-content-block\"\u003e
            \u003cbutton onclick=\"switchAssignTab('assign2-task')\" style=\"background:none; border:none; color: rgba(255,255,255,0.6); cursor: pointer; margin-bottom: 1rem; display: flex; align-items: center; gap: 8px; font-size: 0.9rem; padding: 0;\"\u003e
                \u003cspan class=\"en-only\"\u003e← Back to Tasks\u003c/span\u003e
                \u003cspan class=\"ar-only\"\u003e→ العودة للمهام\u003c/span\u003e
            \u003c/button\u003e

            \u003cdiv class=\"step-header\"\u003e
                \u003cdiv class=\"step-number\"\u003eFIORI\u003c/div\u003e
                \u003cdiv class=\"step-content\"\u003e
                    \u003ch3 class=\"step-title en-only\"\u003eGL Transactions via FIORI\u003c/h3\u003e
                    \u003ch3 class=\"step-title ar-only\"\u003eمعاملات الأستاذ عبر FIORI\u003c/h3\u003e
                    \u003cp class=\"step-desc en-only\"\u003eUsing accounts: \u003cstrong\u003e1000007\u003c/strong\u003e \u0026 \u003cstrong\u003e400000\u003c/strong\u003e\u003c/p\u003e
                    \u003cp class=\"step-desc ar-only\"\u003eالحسابات: \u003cstrong\u003e1000007\u003c/strong\u003e و \u003cstrong\u003e400000\u003c/strong\u003e\u003c/p\u003e
                \u003c/div\u003e
            \u003c/div\u003e

            \u003c!-- Video Tutorial --\u003e
            \u003cdiv style=\"margin-bottom: 2rem; border-radius: 12px; overflow: hidden; border: 1px solid rgba(45, 212, 191, 0.3);\"\u003e
                \u003cvideo controls style=\"width: 100%; display: block;\"\u003e
                    \u003csource src=\"images/creat document fiori.mp4\" type=\"video/mp4\"\u003e
                    Your browser does not support the video tag.
                \u003c/video\u003e
                \u003cdiv style=\"padding: 1rem; background: rgba(10, 40, 35, 0.6); text-align: center;\"\u003e
                    \u003cstrong style=\"color: #2dd4bf;\"\u003e📹 \u003cspan class=\"en-only\"\u003eVideo Tutorial:\u003c/span\u003e\u003cspan class=\"ar-only\"\u003eفيديو تعليمي:\u003c/span\u003e\u003c/strong\u003e 
                    \u003cspan class=\"en-only\"\u003eGL Document Creation via FIORI\u003c/span\u003e
                    \u003cspan class=\"ar-only\"\u003eإنشاء مستند الأستاذ عبر FIORI\u003c/span\u003e
                \u003c/div\u003e
            \u003c/div\u003e

            \u003cdiv class=\"assignment-details\"\u003e
                \u003ch4 class=\"details-title en-only\"\u003eFIORI Apps\u003c/h4\u003e
                \u003ch4 class=\"details-title ar-only\"\u003eتطبيقات FIORI\u003c/h4\u003e
                \u003ctable style=\"width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;\"\u003e
                    \u003cthead\u003e
                        \u003ctr style=\"background: rgba(45, 212, 191, 0.2);\"\u003e
                            \u003cth class=\"en-only\" style=\"padding: 10px; text-align: left; border: 1px solid rgba(45, 212, 191, 0.3);\"\u003eAction\u003c/th\u003e
                            \u003cth class=\"ar-only\" style=\"padding: 10px; text-align: right; border: 1px solid rgba(45, 212, 191, 0.3);\"\u003eالإجراء\u003c/th\u003e
                            \u003cth style=\"padding: 10px; text-align: left; border: 1px solid rgba(45, 212, 191, 0.3);\"\u003eApp\u003c/th\u003e
                        \u003c/tr\u003e
                    \u003c/thead\u003e
                    \u003ctbody\u003e
                        \u003ctr\u003e
                            \u003ctd class=\"en-only\" style=\"padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);\"\u003ePost\u003c/td\u003e
                            \u003ctd class=\"ar-only\" style=\"padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);\"\u003eترحيل\u003c/td\u003e
                            \u003ctd style=\"padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);\"\u003ePost General Journal Entries\u003c/td\u003e
                        \u003c/tr\u003e
                        \u003ctr\u003e
                            \u003ctd class=\"en-only\" style=\"padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);\"\u003eDisplay/Reverse\u003c/td\u003e
                            \u003ctd class=\"ar-only\" style=\"padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);\"\u003eعرض/عكس\u003c/td\u003e
                            \u003ctd style=\"padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);\"\u003eManage Journal Entries\u003c/td\u003e
                        \u003c/tr\u003e
                    \u003c/tbody\u003e
                \u003c/table\u003e

                \u003ch4 class=\"details-title en-only\"\u003eProcedures\u003c/h4\u003e
                \u003ch4 class=\"details-title ar-only\"\u003eالإجراءات\u003c/h4\u003e
                \u003cul class=\"details-list\"\u003e
                    \u003cli class=\"en-only\"\u003e\u003cstrong\u003ePost:\u003c/strong\u003e Open \"Post General Journal Entries\" → Create → Add lines → Post\u003c/li\u003e
                    \u003cli class=\"ar-only\"\u003e\u003cstrong\u003eترحيل:\u003c/strong\u003e افتح \"Post General Journal Entries\" ← إنشاء ← أضف البنود ← ترحيل\u003c/li\u003e
                    \u003cli class=\"en-only\"\u003e\u003cstrong\u003eDisplay:\u003c/strong\u003e Open \"Manage Journal Entries\" → Search → View details\u003c/li\u003e
                    \u003cli class=\"ar-only\"\u003e\u003cstrong\u003eعرض:\u003c/strong\u003e افتح \"Manage Journal Entries\" ← بحث ← عرض التفاصيل\u003c/li\u003e
                    \u003cli class=\"en-only\"\u003e\u003cstrong\u003eReverse:\u003c/strong\u003e Open \"Manage Journal Entries\" → Find doc → Reverse → Confirm\u003c/li\u003e
                    \u003cli class=\"ar-only\"\u003e\u003cstrong\u003eعكس:\u003c/strong\u003e افتح \"Manage Journal Entries\" ← ابحث ← عكس ← تأكيد\u003c/li\u003e
                \u003c/ul\u003e
            \u003c/div\u003e
        \u003c/div\u003e
    \u003c/div\u003e
\u003c/div\u003e`;
