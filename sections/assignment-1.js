const assignment1Content = `
<!-- Assignment 1: GL & FIORI Creation -->
<div class="card-wrapper assignment-wrapper">
    <!-- Minimized View (VISIBLE) -->
    <div class="minimized-card" onclick="restoreCard(this)">
        <div class="min-number">1</div>
        <div class="min-title en-only">GL Account Creation</div>
        <div class="min-title ar-only">إنشاء حسابات الأستاذ</div>
    </div>

    <!-- Full Card (HIDDEN by default - no inline style) -->
    <div class="config-card assignment-card">
         <button class="minimize-btn" onclick="minimizeCard(this)">−</button>
        <div class="assign-tabs">
            <button class="assign-tab-btn active" onclick="switchAssignTab('assign-task')">
                <span class="en-only">Your Task</span><span class="ar-only">المهمة</span>
            </button>
            <button class="assign-tab-btn" onclick="switchAssignTab('gl-gui')">GUI (FS00)</button>
            <button class="assign-tab-btn" onclick="switchAssignTab('gl-fiori')">FIORI</button>
        </div>

        <!-- Task Content (Default) -->
        <div id="assign-task" class="assign-content-block active">
            <div class="step-header">
                <div class="step-number en-only">Task</div>
                <div class="step-number ar-only">المهمة</div>
                <div class="step-content">
                    <h3 class="step-title en-only">Required Assignment</h3>
                    <h3 class="step-title ar-only">المهمة المطلوبة</h3>
                    <p class="step-desc en-only">Select a method to view the step-by-step guide, then complete the tasks below.</p>
                    <p class="step-desc ar-only">اختر طريقة لعرض الدليل، ثم أكمل المهام أدناه.</p>
                </div>
            </div>

            <!-- Navigation Cards -->
            <div class="images-grid" style="margin-bottom: 2rem;">
                 <div class="image-item" onclick="switchAssignTab('gl-gui')" style="cursor: pointer; text-align: center; padding: 2rem; background: rgba(151, 125, 189, 0.1);">
                    <div style="font-size: 2rem; margin-bottom: 1rem;">🖥️</div>
                    <div class="image-caption en-only" style="font-size: 1.1rem; color: #ccfbf1;">Open GUI Guide</div>
                    <div class="image-caption ar-only" style="font-size: 1.1rem; color: #ccfbf1;">فتح دليل GUI</div>
                    <p style="font-size: 0.85rem; color: rgba(255,255,255,0.6); margin-top: 5px;">FS00</p>
                </div>
                <div class="image-item" onclick="switchAssignTab('gl-fiori')" style="cursor: pointer; text-align: center; padding: 2rem; background: rgba(45, 212, 191, 0.1);">
                     <div style="font-size: 2rem; margin-bottom: 1rem;">📱</div>
                    <div class="image-caption en-only" style="font-size: 1.1rem; color: #ccfbf1;">Open FIORI Guide</div>
                    <div class="image-caption ar-only" style="font-size: 1.1rem; color: #ccfbf1;">فتح دليل FIORI</div>
                     <p style="font-size: 0.85rem; color: rgba(255,255,255,0.6); margin-top: 5px;">Manage G/L App</p>
                </div>
            </div>

            <div class="assignment-details">
                <h4 class="details-title en-only">Assignment Tasks</h4>
                <h4 class="details-title ar-only">المهام المطلوبة</h4>
                <ul class="details-list">
                    <li class="en-only"><strong>Task 1:</strong> Create 5 GL accounts via GUI (FS00) - Assets, Liabilities, Income, Expense, Materials</li>
                    <li class="ar-only"><strong>المهمة 1:</strong> إنشاء 5 حسابات أستاذ عبر GUI ‏(FS00) - الأصول، الخصوم، الإيرادات، المصروفات، المواد</li>
                    <li class="en-only"><strong>Task 2:</strong> Create 5 GL accounts via FIORI App - different Account Types</li>
                    <li class="ar-only"><strong>المهمة 2:</strong> إنشاء 5 حسابات أستاذ عبر تطبيق FIORI - أنواع حسابات مختلفة</li>
                    <li class="en-only"><strong>Task 3:</strong> Create user manual (Word/PDF) with screenshots</li>
                    <li class="ar-only"><strong>المهمة 3:</strong> إعداد دليل مستخدم ‏(Word/PDF) مع لقطات شاشة</li>
                </ul>
            </div>
        </div>

        <!-- GUI Content -->
        <div id="gl-gui" class="assign-content-block">
            <button onclick="switchAssignTab('assign-task')" style="background:none; border:none; color: rgba(255,255,255,0.6); cursor: pointer; margin-bottom: 1rem; display: flex; align-items: center; gap: 8px; font-size: 0.9rem; padding: 0;">
                <span class="en-only">← Back to Tasks</span>
                <span class="ar-only">→ العودة للمهام</span>
            </button>
            <div class="step-header">
                <div class="step-number">GUI</div>
                <div class="step-content">
                    <h3 class="step-title en-only">Create GL Account via SAP GUI (FS00)</h3>
                    <h3 class="step-title ar-only">إنشاء حساب الأستاذ عبر FS00</h3>
                    <p class="step-desc en-only">Follow these steps to create a GL account.</p>
                    <p class="step-desc ar-only">اتبع الخطوات التالية لإنشاء حساب.</p>
                </div>
            </div>
            <div class="assignment-details">
                <h4 class="details-title en-only">Step-by-Step Procedure</h4>
                <h4 class="details-title ar-only">خطوات التنفيذ</h4>
                <ul class="details-list">
                    <li class="en-only">Enter transaction code <strong>FS00</strong></li>
                    <li class="ar-only">أدخل كود المعاملة <strong>FS00</strong></li>
                    <li class="en-only">Enter G/L Account number and Company Code → Click Create</li>
                    <li class="ar-only">أدخل رقم الحساب وكود الشركة ← اضغط إنشاء</li>
                    <li class="en-only"><strong>Type/Description:</strong> Select Account Group, P&L or Balance Sheet, Enter descriptions</li>
                    <li class="ar-only"><strong>النوع/الوصف:</strong> اختر مجموعة الحساب، قائمة الدخل أو الميزانية، أدخل الوصف</li>
                    <li class="en-only"><strong>Control Data:</strong> Set Currency, Open Item Management, Sort Key</li>
                    <li class="ar-only"><strong>بيانات التحكم:</strong> حدد العملة، إدارة البنود المفتوحة، مفتاح الترتيب</li>
                    <li class="en-only"><strong>Create/Bank:</strong> Assign Field Status Group → Save (Ctrl+S)</li>
                    <li class="ar-only"><strong>الإنشاء/البنك:</strong> عيّن مجموعة حالة الحقول ← حفظ ‏(Ctrl+S)</li>
                </ul>
            </div>
        </div>

        <!-- FIORI Content -->
        <div id="gl-fiori" class="assign-content-block">
            <button onclick="switchAssignTab('assign-task')" style="background:none; border:none; color: rgba(255,255,255,0.6); cursor: pointer; margin-bottom: 1rem; display: flex; align-items: center; gap: 8px; font-size: 0.9rem; padding: 0;">
                <span class="en-only">← Back to Tasks</span>
                <span class="ar-only">→ العودة للمهام</span>
            </button>
            <div class="step-header">
                <div class="step-number">FIORI</div>
                <div class="step-content">
                    <h3 class="step-title en-only">Create GL Account via FIORI</h3>
                    <h3 class="step-title ar-only">إنشاء حساب الأستاذ عبر FIORI</h3>
                    <p class="step-desc en-only">Using "Manage G/L Account Master Data" App.</p>
                    <p class="step-desc ar-only">باستخدام تطبيق "Manage G/L Account Master Data"</p>
                </div>
            </div>
            <div class="assignment-details">
                <h4 class="details-title en-only">FIORI Procedure</h4>
                <h4 class="details-title ar-only">خطوات FIORI</h4>
                <ul class="details-list">
                    <li class="en-only">Open FIORI and search for <strong>"Manage G/L Account Master Data"</strong></li>
                    <li class="ar-only">افتح FIORI وابحث عن <strong>"Manage G/L Account Master Data"</strong></li>
                    <li class="en-only">Click <strong>Create (+)</strong></li>
                    <li class="ar-only">اضغط <strong>إنشاء (+)</strong></li>
                    <li class="en-only">Enter G/L Account, Chart of Accounts, Account Type, Account Group</li>
                    <li class="ar-only">أدخل رقم الحساب، دليل الحسابات، نوع الحساب، مجموعة الحساب</li>
                    <li class="en-only">Enter descriptions, Assign Company Code, Set Field Status → Save</li>
                    <li class="ar-only">أدخل الأوصاف، عيّن كود الشركة، حدد حالة الحقول ← حفظ</li>
                </ul>
            </div>
        </div>
    </div>
</div>`;
