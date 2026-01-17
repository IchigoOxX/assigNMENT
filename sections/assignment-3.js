const assignment3Content = `
<!-- Assignment 3: Vendor & Posting Documents -->
<div class="card-wrapper assignment-wrapper">
    <!-- Minimized View (VISIBLE) -->
    <div class="minimized-card" onclick="restoreCard(this)">
        <div class="min-number">3</div>
        <div class="min-title en-only">Vendor & Posting Documents</div>
        <div class="min-title ar-only">الموردين وترحيل المستندات</div>
    </div>

    <!-- Full Card (HIDDEN by default) -->
    <div class="config-card assignment-card">
         <button class="minimize-btn" onclick="minimizeCard(this)">−</button>
        <div class="assign-tabs">
            <button class="assign-tab-btn active" onclick="switchAssignTab('assign3-task')">
                <span class="en-only">Your Task</span><span class="ar-only">المهمة</span>
            </button>
            <button class="assign-tab-btn" onclick="switchAssignTab('assign3-gui')">GUI</button>
            <button class="assign-tab-btn" onclick="switchAssignTab('assign3-fiori')">FIORI</button>
        </div>

        <!-- Task Content (Default) -->
        <div id="assign3-task" class="assign-content-block active">
            <div class="step-header">
                <div class="step-number en-only">Task</div>
                <div class="step-number ar-only">المهمة</div>
                <div class="step-content">
                    <h3 class="step-title en-only">Vendor & Posting Document Tasks</h3>
                    <h3 class="step-title ar-only">مهام الموردين وترحيل المستندات</h3>
                    <p class="step-desc en-only">Complete vendor creation and posting exercises using GUI and FIORI.</p>
                    <p class="step-desc ar-only">أكمل تمارين إنشاء الموردين والترحيل عبر GUI و FIORI.</p>
                </div>
            </div>

            <!-- Navigation Cards -->
            <div class="images-grid" style="margin-bottom: 2rem;">
                 <div class="image-item" onclick="switchAssignTab('assign3-gui')" style="cursor: pointer; text-align: center; padding: 2rem; background: rgba(151, 125, 189, 0.1);">
                    <div style="font-size: 2rem; margin-bottom: 1rem;">🖥️</div>
                    <div class="image-caption en-only" style="font-size: 1.1rem; color: #ccfbf1;">Open GUI Guide</div>
                    <div class="image-caption ar-only" style="font-size: 1.1rem; color: #ccfbf1;">فتح دليل GUI</div>
                    <p style="font-size: 0.85rem; color: rgba(255,255,255,0.6); margin-top: 5px;">BP, F-02, FS00</p>
                </div>
                <div class="image-item" onclick="switchAssignTab('assign3-fiori')" style="cursor: pointer; text-align: center; padding: 2rem; background: rgba(45, 212, 191, 0.1);">
                     <div style="font-size: 2rem; margin-bottom: 1rem;">📱</div>
                    <div class="image-caption en-only" style="font-size: 1.1rem; color: #ccfbf1;">Open FIORI Guide</div>
                    <div class="image-caption ar-only" style="font-size: 1.1rem; color: #ccfbf1;">فتح دليل FIORI</div>
                     <p style="font-size: 0.85rem; color: rgba(255,255,255,0.6); margin-top: 5px;">Post Journal Entries</p>
                </div>
            </div>

            <div class="assignment-details">
                <h4 class="details-title en-only">Assignment Tasks</h4>
                <h4 class="details-title ar-only">المهام المطلوبة</h4>
                <ul class="details-list">
                    <li class="en-only"><strong>Task 1:</strong> Create Vendor (Business Partner) via BP Transaction</li>
                    <li class="ar-only"><strong>المهمة 1:</strong> إنشاء مورد (شريك عمل) عبر معاملة BP</li>
                    <li class="en-only"><strong>Task 2:</strong> Create Posting Document Using F-02 (GUI) - Doc #100000110</li>
                    <li class="ar-only"><strong>المهمة 2:</strong> إنشاء مستند ترحيل باستخدام F-02 (GUI) - مستند ‎#100000110</li>
                    <li class="en-only"><strong>Task 3:</strong> Create Posting Document Using FIORI - Doc # (System Generated)</li>
                    <li class="ar-only"><strong>المهمة 3:</strong> إنشاء مستند ترحيل باستخدام FIORI - مستند (يتم إنشاؤه تلقائياً)</li>
                    <li class="en-only"><strong>Task 4:</strong> Create Reconciliation Accounts (Local & Foreign)</li>
                    <li class="ar-only"><strong>المهمة 4:</strong> إنشاء حسابات التسوية (محلي وأجنبي)</li>
                </ul>
            </div>
        </div>

        <!-- GUI Content -->
        <div id="assign3-gui" class="assign-content-block">
            <button onclick="switchAssignTab('assign3-task')" style="background:none; border:none; color: rgba(255,255,255,0.6); cursor: pointer; margin-bottom: 1rem; display: flex; align-items: center; gap: 8px; font-size: 0.9rem; padding: 0;">
                <span class="en-only">← Back to Tasks</span>
                <span class="ar-only">→ العودة للمهام</span>
            </button>
            
            <div class="step-header">
                <div class="step-number">GUI</div>
                <div class="step-content">
                    <h3 class="step-title en-only">Vendor & Posting via SAP GUI</h3>
                    <h3 class="step-title ar-only">الموردين والترحيل عبر GUI</h3>
                    <p class="step-desc en-only">Master Data and Document Posting</p>
                    <p class="step-desc ar-only">البيانات الأساسية وترحيل المستندات</p>
                </div>
            </div>

            <!-- BP Creation -->
            <div style="margin-bottom: 3rem;">
                <h4 class="details-title en-only">1. Create Business Partner (Vendor)</h4>
                <h4 class="details-title ar-only">1. إنشاء شريك العمل (مورد)</h4>
                
                <div style="margin-bottom: 2rem; border-radius: 12px; overflow: hidden; border: 1px solid rgba(45, 212, 191, 0.3);">
                    <video controls style="width: 100%; display: block;">
                        <source src="images/assignment 3 creat bp vendor.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <div style="padding: 1rem; background: rgba(10, 40, 35, 0.6); text-align: center;">
                        <strong style="color: #2dd4bf;">📹 <span class="en-only">Video Tutorial:</span><span class="ar-only">فيديو تعليمي:</span></strong> 
                        <span class="en-only">Business Partner Creation</span>
                        <span class="ar-only">إنشاء شريك العمل</span>
                    </div>
                </div>

                <div class="assignment-details">
                    <h4 class="details-title en-only">BP Configuration</h4>
                    <h4 class="details-title ar-only">إعدادات شريك العمل</h4>
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
                        <thead>
                            <tr style="background: rgba(45, 212, 191, 0.2);">
                                <th class="en-only" style="padding: 10px; text-align: left; border: 1px solid rgba(45, 212, 191, 0.3);">Field</th>
                                <th class="ar-only" style="padding: 10px; text-align: right; border: 1px solid rgba(45, 212, 191, 0.3);">الحقل</th>
                                <th style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.3);">Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">T-Code</td>
                                <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">كود المعاملة</td>
                                <td style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>BP</strong></td>
                            </tr>
                            <tr>
                                <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">BP Type</td>
                                <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">نوع الشريك</td>
                                <td style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>Person</strong></td>
                            </tr>
                            <tr>
                                <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">Name</td>
                                <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">الاسم</td>
                                <td style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>learn-186</strong></td>
                            </tr>
                            <tr>
                                <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">Language</td>
                                <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">اللغة</td>
                                <td style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>AR</strong></td>
                            </tr>
                            <tr>
                                <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">Region</td>
                                <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">المنطقة</td>
                                <td style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>EG</strong></td>
                            </tr>
                            <tr>
                                <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">Reconciliation Account</td>
                                <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">حساب التسوية</td>
                                <td style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>2000087</strong></td>
                            </tr>
                            <tr>
                                <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">Company Code</td>
                                <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">كود الشركة</td>
                                <td style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>GT07</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- F-02 Posting -->
            <div style="margin-bottom: 3rem;">
                <h4 class="details-title en-only">2. Create Posting Document (F-02)</h4>
                <h4 class="details-title ar-only">2. إنشاء مستند ترحيل (F-02)</h4>
                
                <div style="margin-bottom: 2rem; border-radius: 12px; overflow: hidden; border: 1px solid rgba(45, 212, 191, 0.3);">
                    <video controls style="width: 100%; display: block;">
                        <source src="images/assignment 3 Create Posting Document Using F-02 gui.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <div style="padding: 1rem; background: rgba(10, 40, 35, 0.6); text-align: center;">
                        <strong style="color: #2dd4bf;">📹 <span class="en-only">Video Tutorial:</span><span class="ar-only">فيديو تعليمي:</span></strong> 
                        <span class="en-only">F-02 Document Posting</span>
                        <span class="ar-only">ترحيل مستند F-02</span>
                    </div>
                </div>

                <div class="assignment-details">
                    <h4 class="details-title en-only">Document Header</h4>
                    <h4 class="details-title ar-only">رأس المستند</h4>
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
                        <tbody>
                            <tr>
                                <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">T-Code</td>
                                <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">كود المعاملة</td>
                                <td style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>F-02</strong></td>
                            </tr>
                            <tr>
                                <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">Company Code</td>
                                <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">كود الشركة</td>
                                <td style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>GT07</strong></td>
                            </tr>
                            <tr>
                                <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">Currency</td>
                                <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">العملة</td>
                                <td style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>EGP</strong></td>
                            </tr>
                            <tr>
                                <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">Document Type</td>
                                <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">نوع المستند</td>
                                <td style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>SA</strong></td>
                            </tr>
                        </tbody>
                    </table>

                    <h4 class="details-title en-only">Line Items</h4>
                    <h4 class="details-title ar-only">بنود المستند</h4>
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
                        <thead>
                            <tr style="background: rgba(45, 212, 191, 0.2);">
                                <th class="en-only" style="padding: 10px; text-align: left; border: 1px solid rgba(45, 212, 191, 0.3);">Posting Key</th>
                                <th class="ar-only" style="padding: 10px; text-align: right; border: 1px solid rgba(45, 212, 191, 0.3);">مفتاح الترحيل</th>
                                <th class="en-only" style="padding: 10px; text-align: left; border: 1px solid rgba(45, 212, 191, 0.3);">GL Account</th>
                                <th class="ar-only" style="padding: 10px; text-align: right; border: 1px solid rgba(45, 212, 191, 0.3);">حساب الأستاذ</th>
                                <th class="en-only" style="padding: 10px; text-align: left; border: 1px solid rgba(45, 212, 191, 0.3);">Amount</th>
                                <th class="ar-only" style="padding: 10px; text-align: right; border: 1px solid rgba(45, 212, 191, 0.3);">المبلغ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>40</strong> (Debit)</td>
                                <td style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>2000080</strong></td>
                                <td style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>15,000 EGP</strong></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>50</strong> (Credit)</td>
                                <td style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>4000000</strong></td>
                                <td style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>15,000 EGP</strong></td>
                            </tr>
                        </tbody>
                    </table>

                    <p class="en-only" style="padding: 1rem; background: rgba(45, 212, 191, 0.1); border-radius: 8px; margin-top: 1rem;">
                        <strong>Document Number:</strong> 100000110
                    </p>
                    <p class="ar-only" style="padding: 1rem; background: rgba(45, 212, 191, 0.1); border-radius: 8px; margin-top: 1rem;">
                        <strong>رقم المستند:</strong> 100000110
                    </p>
                </div>
            </div>

            <!-- Reconciliation Accounts -->
            <div style="margin-bottom: 2rem;">
                <h4 class="details-title en-only">3. Create Reconciliation Accounts (FS00)</h4>
                <h4 class="details-title ar-only">3. إنشاء حسابات التسوية (FS00)</h4>
                
                <div style="margin-bottom: 2rem; border-radius: 12px; overflow: hidden; border: 1px solid rgba(45, 212, 191, 0.3);">
                    <video controls style="width: 100%; display: block;">
                        <source src="images/assignment 3 recon accun local and forigen.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <div style="padding: 1rem; background: rgba(10, 40, 35, 0.6); text-align: center;">
                        <strong style="color: #2dd4bf;">📹 <span class="en-only">Video Tutorial:</span><span class="ar-only">فيديو تعليمي:</span></strong> 
                        <span class="en-only">Reconciliation Accounts Setup</span>
                        <span class="ar-only">إعداد حسابات التسوية</span>
                    </div>
                </div>

                <div class="assignment-details">
                    <h4 class="details-title en-only">Local Reconciliation Account (EGP)</h4>
                    <h4 class="details-title ar-only">حساب التسوية المحلي (جنيه مصري)</h4>
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
                        <tbody>
                            <tr>
                                <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">Account Number</td>
                                <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">رقم الحساب</td>
                                <td style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>2000089</strong></td>
                            </tr>
                            <tr>
                                <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">Account Type</td>
                                <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">نوع الحساب</td>
                                <td style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>Balance Sheet</strong></td>
                            </tr>
                            <tr>
                                <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">Account Group</td>
                                <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">مجموعة الحساب</td>
                                <td style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>Liabilities</strong></td>
                            </tr>
                            <tr>
                                <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">Recon. Account Type</td>
                                <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">نوع حساب التسوية</td>
                                <td style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>K (Vendor)</strong></td>
                            </tr>
                            <tr>
                                <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">Field Status Group</td>
                                <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">مجموعة حالة الحقل</td>
                                <td style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>ZRAA</strong></td>
                            </tr>
                            <tr>
                                <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">Currency</td>
                                <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">العملة</td>
                                <td style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>EGP</strong></td>
                            </tr>
                        </tbody>
                    </table>

                    <h4 class="details-title en-only">Foreign Reconciliation Account (AED)</h4>
                    <h4 class="details-title ar-only">حساب التسوية الأجنبي (درهم إماراتي)</h4>
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
                        <tbody>
                            <tr>
                                <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">Account Number</td>
                                <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">رقم الحساب</td>
                                <td style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>2000087</strong></td>
                            </tr>
                            <tr>
                                <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">Currency</td>
                                <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">العملة</td>
                                <td style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>AED</strong></td>
                            </tr>
                            <tr>
                                <td colspan="2" class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2); font-style: italic;">All other settings same as local account</td>
                                <td colspan="2" class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2); font-style: italic;">جميع الإعدادات الأخرى مثل الحساب المحلي</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- FIORI Content -->
        <div id="assign3-fiori" class="assign-content-block">
            <button onclick="switchAssignTab('assign3-task')" style="background:none; border:none; color: rgba(255,255,255,0.6); cursor: pointer; margin-bottom: 1rem; display: flex; align-items: center; gap: 8px; font-size: 0.9rem; padding: 0;">
                <span class="en-only">← Back to Tasks</span>
                <span class="ar-only">→ العودة للمهام</span>
            </button>
            
            <div class="step-header">
                <div class="step-number">FIORI</div>
                <div class="step-content">
                    <h3 class="step-title en-only">Posting via FIORI</h3>
                    <h3 class="step-title ar-only">الترحيل عبر FIORI</h3>
                    <p class="step-desc en-only">Post General Journal Entries using FIORI App</p>
                    <p class="step-desc ar-only">ترحيل قيود يومية عامة باستخدام تطبيق FIORI</p>
                </div>
            </div>

            <!-- Video Tutorial -->
            <div style="margin-bottom: 2rem; border-radius: 12px; overflow: hidden; border: 1px solid rgba(45, 212, 191, 0.3);">
                <video controls style="width: 100%; display: block;">
                    <source src="images/assignment 3 post gl fiori.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <div style="padding: 1rem; background: rgba(10, 40, 35, 0.6); text-align: center;">
                    <strong style="color: #2dd4bf;">📹 <span class="en-only">Video Tutorial:</span><span class="ar-only">فيديو تعليمي:</span></strong> 
                    <span class="en-only">FIORI Posting Document</span>
                    <span class="ar-only">ترحيل مستند FIORI</span>
                </div>
            </div>

            <div class="assignment-details">
                <h4 class="details-title en-only">FIORI App</h4>
                <h4 class="details-title ar-only">تطبيق FIORI</h4>
                <p class="en-only" style="padding: 1rem; background: rgba(45, 212, 191, 0.1); border-radius: 8px; margin-bottom: 1.5rem;">
                    <strong>App Name:</strong> Post General Journal Entries
                </p>
                <p class="ar-only" style="padding: 1rem; background: rgba(45, 212, 191, 0.1); border-radius: 8px; margin-bottom: 1.5rem;">
                    <strong>اسم التطبيق:</strong> ترحيل القيود اليومية العامة
                </p>

                <h4 class="details-title en-only">Document Header</h4>
                <h4 class="details-title ar-only">رأس المستند</h4>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
                    <tbody>
                        <tr>
                            <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">Company Code</td>
                            <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">كود الشركة</td>
                            <td style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>GT07</strong></td>
                        </tr>
                        <tr>
                            <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">Currency</td>
                            <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">العملة</td>
                            <td style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>AED</strong></td>
                        </tr>
                    </tbody>
                </table>

                <h4 class="details-title en-only">Line Items</h4>
                <h4 class="details-title ar-only">بنود المستند</h4>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
                    <thead>
                        <tr style="background: rgba(45, 212, 191, 0.2);">
                            <th class="en-only" style="padding: 10px; text-align: left; border: 1px solid rgba(45, 212, 191, 0.3);">Type</th>
                            <th class="ar-only" style="padding: 10px; text-align: right; border: 1px solid rgba(45, 212, 191, 0.3);">النوع</th>
                            <th class="en-only" style="padding: 10px; text-align: left; border: 1px solid rgba(45, 212, 191, 0.3);">Details</th>
                            <th class="ar-only" style="padding: 10px; text-align: right; border: 1px solid rgba(45, 212, 191, 0.3);">التفاصيل</th>
                            <th class="en-only" style="padding: 10px; text-align: left; border: 1px solid rgba(45, 212, 191, 0.3);">Amount</th>
                            <th class="ar-only" style="padding: 10px; text-align: right; border: 1px solid rgba(45, 212, 191, 0.3);">المبلغ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>Debit</strong></td>
                            <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>مدين</strong></td>
                            <td style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">
                                <span class="en-only">Cost Center: GT7 Sales<br>GL Account: 2000081</span>
                                <span class="ar-only">مركز التكلفة: مبيعات GT7<br>حساب الأستاذ: 2000081</span>
                            </td>
                            <td style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>20,000 AED</strong></td>
                        </tr>
                        <tr>
                            <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>Credit</strong></td>
                            <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>دائن</strong></td>
                            <td style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">
                                <span class="en-only">GL Account: 4000000</span>
                                <span class="ar-only">حساب الأستاذ: 4000000</span>
                            </td>
                            <td style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>20,000 AED</strong></td>
                        </tr>
                    </tbody>
                </table>

                <p class="en-only" style="padding: 1rem; background: rgba(45, 212, 191, 0.1); border-radius: 8px; margin-top: 1rem;">
                    <strong>Note:</strong> Document number will be automatically generated by the system after posting.
                </p>
                <p class="ar-only" style="padding: 1rem; background: rgba(45, 212, 191, 0.1); border-radius: 8px; margin-top: 1rem;">
                    <strong>ملاحظة:</strong> سيتم إنشاء رقم المستند تلقائياً بواسطة النظام بعد الترحيل.
                </p>

                <h4 class="details-title en-only">Procedures</h4>
                <h4 class="details-title ar-only">الإجراءات</h4>
                <ul class="details-list">
                    <li class="en-only">Open FIORI Launchpad → Search for 'Post General Journal Entries' app</li>
                    <li class="ar-only">افتح منصة FIORI → ابحث عن تطبيق 'ترحيل القيود اليومية العامة'</li>
                    <li class="en-only">Enter Company Code & Currency in header</li>
                    <li class="ar-only">أدخل كود الشركة والعملة في الرأس</li>
                    <li class="en-only">Add Debit line: Cost Center GT7 Sales, Account 2000081, Amount 20,000</li>
                    <li class="ar-only">أضف بند المدين: مركز التكلفة مبيعات GT7، الحساب 2000081، المبلغ 20,000</li>
                    <li class="en-only">Add Credit line: Account 4000000, Amount 20,000</li>
                    <li class="ar-only">أضف بند الدائن: الحساب 4000000، المبلغ 20,000</li>
                    <li class="en-only">Verify balance (Debit = Credit) → Post</li>
                    <li class="ar-only">تحقق من التوازن (المدين = الدائن) → ترحيل</li>
                </ul>
            </div>
        </div>
    </div>
</div>
`;
