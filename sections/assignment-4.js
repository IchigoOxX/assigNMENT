const assignment4Content = `
<!-- Assignment 4: Accounts Payable -->
<div class="card-wrapper assignment-wrapper">
    <!-- Minimized View -->
    <div class="minimized-card" onclick="restoreCard(this)">
        <div class="min-number">4</div>
        <div class="min-title en-only">Accounts Payable (AP)</div>
        <div class="min-title ar-only">حسابات الدائنين (الموردين)</div>
    </div>

    <!-- Full Card -->
    <div class="config-card assignment-card">
        <button class="minimize-btn" onclick="minimizeCard(this)">−</button>
        <div class="assign-tabs">
            <button class="assign-tab-btn active" onclick="switchAssignTab('assign4-task')">
                <span class="en-only">Your Task</span><span class="ar-only">المهمة</span>
            </button>
            <button class="assign-tab-btn" onclick="switchAssignTab('assign4-gui')">GUI</button>
        </div>

        <!-- Task Content -->
        <div id="assign4-task" class="assign-content-block active">
            <div class="step-header">
                <div class="step-number en-only">Task</div>
                <div class="step-number ar-only">المهمة</div>
                <div class="step-content">
                    <h3 class="step-title en-only">Accounts Payable Tasks</h3>
                    <h3 class="step-title ar-only">مهام حسابات الدائنين</h3>
                    <p class="step-desc en-only">Complete vendor invoice and payment exercises using SAP GUI.</p>
                    <p class="step-desc ar-only">أكمل تمارين فواتير ومدفوعات الموردين عبر SAP GUI.</p>
                </div>
            </div>

            <!-- Navigation Card -->
            <div class="images-grid" style="margin-bottom: 2rem;">
                <div class="image-item" onclick="switchAssignTab('assign4-gui')" style="cursor: pointer; text-align: center; padding: 2rem; background: rgba(151, 125, 189, 0.1); width: 100%; max-width: 400px; margin: 0 auto;">
                    <div style="font-size: 2rem; margin-bottom: 1rem;">🖥️</div>
                    <div class="image-caption en-only" style="font-size: 1.1rem; color: #ccfbf1;">Open GUI Guide</div>
                    <div class="image-caption ar-only" style="font-size: 1.1rem; color: #ccfbf1;">فتح دليل GUI</div>
                    <p style="font-size: 0.85rem; color: rgba(255,255,255,0.6); margin-top: 5px;">FB60, F-41, F-48, F-53</p>
                </div>
            </div>

            <div class="assignment-details">
                <h4 class="details-title en-only">Assignment Tasks</h4>
                <h4 class="details-title ar-only">المهام المطلوبة</h4>
                <ul class="details-list">
                    <li class="en-only"><strong>Task 1:</strong> Post Vendor Invoice via FB60 - Doc #1900000034</li>
                    <li class="ar-only"><strong>المهمة 1:</strong> ترحيل فاتورة مورد عبر FB60 - مستند ‎#1900000034</li>
                    <li class="en-only"><strong>Task 2:</strong> Post Vendor Credit Memo via F-41 - Doc #1700000022</li>
                    <li class="ar-only"><strong>المهمة 2:</strong> ترحيل إشعار دائن مورد عبر F-41 - مستند ‎#1700000022</li>
                    <li class="en-only"><strong>Task 3:</strong> Post Vendor Down Payment via F-48 - Doc #1500000015</li>
                    <li class="ar-only"><strong>المهمة 3:</strong> ترحيل دفعة مقدمة للمورد عبر F-48 - مستند ‎#1500000015</li>
                    <li class="en-only"><strong>Task 4:</strong> Post Outgoing Payment via F-53 - Doc #1500000016</li>
                    <li class="ar-only"><strong>المهمة 4:</strong> ترحيل سداد للمورد عبر F-53 - مستند ‎#1500000016</li>
                </ul>
            </div>
        </div>

        <!-- GUI Content -->
        <div id="assign4-gui" class="assign-content-block">
            <button onclick="switchAssignTab('assign4-task')" style="background:none; border:none; color: rgba(255,255,255,0.6); cursor: pointer; margin-bottom: 1rem; display: flex; align-items: center; gap: 8px; font-size: 0.9rem; padding: 0;">
                <span class="en-only">← Back to Tasks</span>
                <span class="ar-only">→ العودة للمهام</span>
            </button>
            
            <div class="step-header">
                <div class="step-number">GUI</div>
                <div class="step-content">
                    <h3 class="step-title en-only">Accounts Payable via SAP GUI</h3>
                    <h3 class="step-title ar-only">حسابات الدائنين عبر GUI</h3>
                    <p class="step-desc en-only">Vendor Invoices, Credit Memos, Down Payments & Outgoing Payments</p>
                    <p class="step-desc ar-only">فواتير الموردين، إشعارات الدائن، الدفعات المقدمة والمدفوعات</p>
                </div>
            </div>

            <!-- 1. FB60 - Vendor Invoice -->
            <div style="margin-bottom: 3rem;">
                <h4 class="details-title en-only">1. Post Vendor Invoice (FB60)</h4>
                <h4 class="details-title ar-only">1. ترحيل فاتورة المورد (FB60)</h4>
                
                <div style="margin-bottom: 2rem; border-radius: 12px; overflow: hidden; border: 1px solid rgba(45, 212, 191, 0.3);">
                    <video controls style="width: 100%; display: block;">
                        <source src="images/FB60 ASSIGNEMT 4 VENDOR INVOICE.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <div style="padding: 1rem; background: rgba(10, 40, 35, 0.6); text-align: center;">
                        <strong style="color: #2dd4bf;">📹 <span class="en-only">Video Tutorial:</span><span class="ar-only">فيديو تعليمي:</span></strong> 
                        <span class="en-only">Vendor Invoice Posting</span>
                        <span class="ar-only">ترحيل فاتورة المورد</span>
                    </div>
                </div>

                <div class="assignment-details">
                    <h4 class="details-title en-only">What is FB60?</h4>
                    <h4 class="details-title ar-only">ما هو FB60؟</h4>
                    <p class="en-only" style="margin-bottom: 1rem; line-height: 1.7;">
                        FB60 is used to post vendor invoices directly without a Purchase Order (PO). 
                        Common uses include utility bills, subscriptions, and maintenance fees.
                    </p>
                    <p class="ar-only" style="margin-bottom: 1rem; line-height: 1.7;">
                        يُستخدم FB60 لترحيل فواتير الموردين مباشرة بدون أمر شراء (PO). 
                        الاستخدامات الشائعة تشمل فواتير الخدمات والاشتراكات ورسوم الصيانة.
                    </p>

                    <h4 class="details-title en-only">Procedures</h4>
                    <h4 class="details-title ar-only">الإجراءات</h4>
                    <ul class="details-list">
                        <li class="en-only">Execute T-Code <strong>FB60</strong></li>
                        <li class="ar-only">تنفيذ كود المعاملة <strong>FB60</strong></li>
                        <li class="en-only">Enter Vendor Number, Invoice Date, Reference Number</li>
                        <li class="ar-only">إدخال رقم المورد، تاريخ الفاتورة، الرقم المرجعي</li>
                        <li class="en-only">Enter Amount and Currency</li>
                        <li class="ar-only">إدخال المبلغ والعملة</li>
                        <li class="en-only">Enter GL Account details (expense account)</li>
                        <li class="ar-only">إدخال تفاصيل حساب الأستاذ (حساب المصروفات)</li>
                        <li class="en-only">Simulate document to verify entries</li>
                        <li class="ar-only">محاكاة المستند للتحقق من القيود</li>
                        <li class="en-only">Post the document (Document Type: KR)</li>
                        <li class="ar-only">ترحيل المستند (نوع المستند: KR)</li>
                    </ul>

                    <table style="width: 100%; border-collapse: collapse; margin-top: 1.5rem;">
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
                                <td style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>FB60</strong></td>
                            </tr>
                            <tr>
                                <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">Document Type</td>
                                <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">نوع المستند</td>
                                <td style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>KR</strong> (Vendor Invoice)</td>
                            </tr>
                            <tr>
                                <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">Company Code</td>
                                <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">كود الشركة</td>
                                <td style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>GT07</strong></td>
                            </tr>
                            <tr>
                                <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">Document Number</td>
                                <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">رقم المستند</td>
                                <td style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>1900000034</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- 2. F-41 - Credit Memo -->
            <div style="margin-bottom: 3rem;">
                <h4 class="details-title en-only">2. Post Vendor Credit Memo (F-41)</h4>
                <h4 class="details-title ar-only">2. ترحيل إشعار دائن المورد (F-41)</h4>
                
                <div style="margin-bottom: 2rem; border-radius: 12px; overflow: hidden; border: 1px solid rgba(45, 212, 191, 0.3);">
                    <video controls style="width: 100%; display: block;">
                        <source src="images/CREDIT MEMO ASSIGNMENT 4.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <div style="padding: 1rem; background: rgba(10, 40, 35, 0.6); text-align: center;">
                        <strong style="color: #2dd4bf;">📹 <span class="en-only">Video Tutorial:</span><span class="ar-only">فيديو تعليمي:</span></strong> 
                        <span class="en-only">Vendor Credit Memo</span>
                        <span class="ar-only">إشعار دائن المورد</span>
                    </div>
                </div>

                <div class="assignment-details">
                    <h4 class="details-title en-only">What is F-41?</h4>
                    <h4 class="details-title ar-only">ما هو F-41؟</h4>
                    <p class="en-only" style="margin-bottom: 1rem; line-height: 1.7;">
                        F-41 is used to enter vendor credit memos - a reduction in the amount owed to a vendor. 
                        Common reasons include returned goods, price adjustments, or billing corrections.
                    </p>
                    <p class="ar-only" style="margin-bottom: 1rem; line-height: 1.7;">
                        يُستخدم F-41 لإدخال إشعارات دائن الموردين - وهي تخفيض في المبلغ المستحق للمورد. 
                        الأسباب الشائعة تشمل البضائع المرتجعة، تعديلات الأسعار، أو تصحيحات الفواتير.
                    </p>

                    <h4 class="details-title en-only">Procedures</h4>
                    <h4 class="details-title ar-only">الإجراءات</h4>
                    <ul class="details-list">
                        <li class="en-only">Execute T-Code <strong>F-41</strong></li>
                        <li class="ar-only">تنفيذ كود المعاملة <strong>F-41</strong></li>
                        <li class="en-only">Enter Document Date & Posting Date</li>
                        <li class="ar-only">إدخال تاريخ المستند وتاريخ الترحيل</li>
                        <li class="en-only">Enter Company Code & Currency</li>
                        <li class="ar-only">إدخال كود الشركة والعملة</li>
                        <li class="en-only">Enter Vendor Account Number</li>
                        <li class="ar-only">إدخال رقم حساب المورد</li>
                        <li class="en-only">Enter Credit Memo Amount</li>
                        <li class="ar-only">إدخال مبلغ الإشعار الدائن</li>
                        <li class="en-only">Post the document</li>
                        <li class="ar-only">ترحيل المستند</li>
                    </ul>

                    <table style="width: 100%; border-collapse: collapse; margin-top: 1.5rem;">
                        <tbody>
                            <tr>
                                <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">T-Code</td>
                                <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">كود المعاملة</td>
                                <td style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>F-41</strong></td>
                            </tr>
                            <tr>
                                <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">Document Type</td>
                                <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">نوع المستند</td>
                                <td style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>KG</strong> (Credit Memo)</td>
                            </tr>
                            <tr>
                                <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">Document Number</td>
                                <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">رقم المستند</td>
                                <td style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>1700000022</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- 3. F-48 - Down Payment -->
            <div style="margin-bottom: 3rem;">
                <h4 class="details-title en-only">3. Post Vendor Down Payment (F-48)</h4>
                <h4 class="details-title ar-only">3. ترحيل دفعة مقدمة للمورد (F-48)</h4>
                
                <div style="margin-bottom: 2rem; border-radius: 12px; overflow: hidden; border: 1px solid rgba(45, 212, 191, 0.3);">
                    <video controls style="width: 100%; display: block;">
                        <source src="images/MAKE DOWNPAYMEN assognment 4T.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <div style="padding: 1rem; background: rgba(10, 40, 35, 0.6); text-align: center;">
                        <strong style="color: #2dd4bf;">📹 <span class="en-only">Video Tutorial:</span><span class="ar-only">فيديو تعليمي:</span></strong> 
                        <span class="en-only">Vendor Down Payment</span>
                        <span class="ar-only">الدفعة المقدمة للمورد</span>
                    </div>
                </div>

                <div class="assignment-details">
                    <h4 class="details-title en-only">What is F-48?</h4>
                    <h4 class="details-title ar-only">ما هو F-48؟</h4>
                    <p class="en-only" style="margin-bottom: 1rem; line-height: 1.7;">
                        F-48 is used to post advance payments (down payments) to vendors before delivery of goods/services. 
                        It uses a Special G/L Indicator to post to an alternative account, showing as an asset on the balance sheet.
                    </p>
                    <p class="ar-only" style="margin-bottom: 1rem; line-height: 1.7;">
                        يُستخدم F-48 لترحيل الدفعات المقدمة للموردين قبل استلام البضائع/الخدمات. 
                        يستخدم مؤشر الأستاذ الخاص للترحيل إلى حساب بديل، ويظهر كأصل في الميزانية العمومية.
                    </p>

                    <h4 class="details-title en-only">Procedures</h4>
                    <h4 class="details-title ar-only">الإجراءات</h4>
                    <ul class="details-list">
                        <li class="en-only">Execute T-Code <strong>F-48</strong></li>
                        <li class="ar-only">تنفيذ كود المعاملة <strong>F-48</strong></li>
                        <li class="en-only">Enter Document Date & Company Code</li>
                        <li class="ar-only">إدخال تاريخ المستند وكود الشركة</li>
                        <li class="en-only">Enter Vendor Account & Special G/L Indicator</li>
                        <li class="ar-only">إدخال حساب المورد ومؤشر الأستاذ الخاص</li>
                        <li class="en-only">Enter Bank Account details for payment</li>
                        <li class="ar-only">إدخال تفاصيل الحساب البنكي للدفع</li>
                        <li class="en-only">Enter Down Payment Amount</li>
                        <li class="ar-only">إدخال مبلغ الدفعة المقدمة</li>
                        <li class="en-only">Post the document</li>
                        <li class="ar-only">ترحيل المستند</li>
                    </ul>

                    <table style="width: 100%; border-collapse: collapse; margin-top: 1.5rem;">
                        <tbody>
                            <tr>
                                <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">T-Code</td>
                                <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">كود المعاملة</td>
                                <td style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>F-48</strong></td>
                            </tr>
                            <tr>
                                <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">Special G/L Ind.</td>
                                <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">مؤشر الأستاذ الخاص</td>
                                <td style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>A</strong> (Down Payment)</td>
                            </tr>
                            <tr>
                                <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">Document Number</td>
                                <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">رقم المستند</td>
                                <td style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>1500000015</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- 4. F-53 - Outgoing Payment -->
            <div style="margin-bottom: 2rem;">
                <h4 class="details-title en-only">4. Post Outgoing Payment (F-53)</h4>
                <h4 class="details-title ar-only">4. ترحيل سداد للمورد (F-53)</h4>
                
                <div style="margin-bottom: 2rem; border-radius: 12px; overflow: hidden; border: 1px solid rgba(45, 212, 191, 0.3);">
                    <video controls style="width: 100%; display: block;">
                        <source src="images/f-53 payment for vendor  assignemnt 4.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <div style="padding: 1rem; background: rgba(10, 40, 35, 0.6); text-align: center;">
                        <strong style="color: #2dd4bf;">📹 <span class="en-only">Video Tutorial:</span><span class="ar-only">فيديو تعليمي:</span></strong> 
                        <span class="en-only">Outgoing Payment to Vendor</span>
                        <span class="ar-only">السداد للمورد</span>
                    </div>
                </div>

                <div class="assignment-details">
                    <h4 class="details-title en-only">What is F-53?</h4>
                    <h4 class="details-title ar-only">ما هو F-53؟</h4>
                    <p class="en-only" style="margin-bottom: 1rem; line-height: 1.7;">
                        F-53 is used to process manual outgoing payments to vendors. It clears open vendor invoices 
                        against the payment and updates the General Ledger accordingly.
                    </p>
                    <p class="ar-only" style="margin-bottom: 1rem; line-height: 1.7;">
                        يُستخدم F-53 لمعالجة المدفوعات الصادرة اليدوية للموردين. يقوم بتسوية الفواتير المفتوحة 
                        مقابل الدفع ويحدّث دفتر الأستاذ العام وفقاً لذلك.
                    </p>

                    <h4 class="details-title en-only">Procedures</h4>
                    <h4 class="details-title ar-only">الإجراءات</h4>
                    <ul class="details-list">
                        <li class="en-only">Execute T-Code <strong>F-53</strong></li>
                        <li class="ar-only">تنفيذ كود المعاملة <strong>F-53</strong></li>
                        <li class="en-only">Enter Document Date & Company Code</li>
                        <li class="ar-only">إدخال تاريخ المستند وكود الشركة</li>
                        <li class="en-only">Enter Bank Account (paying from)</li>
                        <li class="ar-only">إدخال الحساب البنكي (المصدر)</li>
                        <li class="en-only">Enter Vendor Account Number</li>
                        <li class="ar-only">إدخال رقم حساب المورد</li>
                        <li class="en-only">Select open invoices to clear</li>
                        <li class="ar-only">اختيار الفواتير المفتوحة للتسوية</li>
                        <li class="en-only">Verify amounts and post</li>
                        <li class="ar-only">التحقق من المبالغ والترحيل</li>
                    </ul>

                    <table style="width: 100%; border-collapse: collapse; margin-top: 1.5rem;">
                        <tbody>
                            <tr>
                                <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">T-Code</td>
                                <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">كود المعاملة</td>
                                <td style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>F-53</strong></td>
                            </tr>
                            <tr>
                                <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">Function</td>
                                <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">الوظيفة</td>
                                <td style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>Post + Clear</strong></td>
                            </tr>
                            <tr>
                                <td class="en-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">Document Number</td>
                                <td class="ar-only" style="padding: 10px; border: 1px solid rgba(45, 212, 191, 0.2);">رقم المستند</td>
                                <td style="padding: 10px; text-align: center; border: 1px solid rgba(45, 212, 191, 0.2);"><strong>1500000016</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
`;
