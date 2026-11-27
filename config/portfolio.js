// --- Portfolio Personalization Configuration (Trilingual: ID / EN / ZH) ---
export const PORTFOLIO_CONFIG = {
    profile: {
        fullName: "Rozindar Haryo Salam",
        shortName: "Project & Portofolio",
        title: { id: "Finance Officer – Account Payable", en: "Finance Officer – Accounts Payable", zh: "财务专员（应付账款）" },
        badgeText: {
            id: "Terbuka untuk Peluang Karier",
            en: "Open to Career Opportunities",
            zh: "寻求职业发展机会"
        },
        leadText: {
            id: "Finance Officer berfokus pada Account Payable, lulusan S1 Akuntansi (IPK 3,66) dan bersertifikasi Brevet A&B, dengan pengalaman profesional lebih dari 2 tahun di bidang Finance, Accounting, dan Data Analysis. Berpengalaman menangani pencocokan PO dengan penerimaan barang, pembayaran vendor, petty cash, dan rekonsiliasi bank mingguan, serta mengelola arus kas Rp3–4,5 miliar per bulan.",
            en: "Finance Officer focused on Accounts Payable, holding a Bachelor of Accounting (GPA 3.66) and a Brevet A&B tax certification, with over 2 years of professional experience in Finance, Accounting, and Data Analysis. Experienced in matching purchase orders with goods receipts, vendor payments, petty cash, and weekly bank reconciliations, as well as managing a monthly cash flow of IDR 3–4.5 billion.",
            zh: "专注应付账款的财务专员，会计学学士（GPA 3.66），持有 Brevet A&B 税务认证，拥有两年以上财务、会计及数据分析工作经验。熟悉采购订单与收货单核对、供应商付款、备用金管理及每周银行对账，并管理每月30–45亿印尼盾的现金流。"
        },
        email: "haryosalam3@gmail.com",
        phone: "081215288361",
        location: { id: "Cilacap, Jawa Tengah", en: "Cilacap, Central Java", zh: "中爪哇省 Cilacap" },
        socials: {
            linkedin: "https://www.linkedin.com/in/rozindarharyosalam/",
            instagram: "https://www.instagram.com/rozindar.haryo/"
        },
        // File yang diunduh tombol "Unduh CV". Untuk memperbarui CV, timpa file di folder public/cv/.
        // Belum ada CV versi Mandarin, jadi mode ZH memakai versi Inggris.
        cvFiles: {
            id: "/cv/CV_Rozindar_Haryo_Salam_AP.pdf",
            en: "/cv/CV_Rozindar_Haryo_Salam_AP_EN.pdf",
            zh: "/cv/CV_Rozindar_Haryo_Salam_AP_EN.pdf"
        }
    },
    stats: [
        {
            icon: "fa-business-time",
            target: 2,
            prefix: "",
            suffix: { id: "+ Tahun", en: "+ Years", zh: "+ 年" },
            label: { id: "Pengalaman Finance, Accounting & Data Analysis", en: "Finance, Accounting & Data Analysis Experience", zh: "财务、会计与数据分析经验" }
        },
        {
            icon: "fa-vault",
            // "value" ditampilkan apa adanya (tanpa animasi hitung) karena berupa rentang.
            value: { id: "3–4,5", en: "3–4.5", zh: "30–45" },
            prefix: { id: "Rp", en: "Rp", zh: "Rp" },
            suffix: { id: " M", en: "B", zh: "亿" },
            label: { id: "Arus Kas Bulanan Dikelola", en: "Monthly Cash Flow Managed", zh: "每月管理的现金流" }
        },
        {
            icon: "fa-building-columns",
            target: 7,
            prefix: "",
            suffix: "",
            label: { id: "Rekening Bank Perusahaan Dikelola", en: "Company Bank Accounts Managed", zh: "管理的公司银行账户" }
        },
        {
            icon: "fa-bezier-curve",
            target: 500,
            prefix: "",
            suffix: "K+",
            label: { id: "Data Penjualan Dianalisis", en: "Sales Records Analyzed", zh: "分析的销售数据" }
        }
    ],
    skills: [
        {
            icon: "fa-calculator",
            title: { id: "Finance & Accounting", en: "Finance & Accounting", zh: "财务与会计" },
            description: {
                id: "Account Payable, Pencocokan PO & Penerimaan Barang, Pembayaran Vendor, Petty Cash, Rekonsiliasi Bank, Pengelolaan Arus Kas",
                en: "Accounts Payable, PO & Goods Receipt Matching, Vendor Payments, Petty Cash, Bank Reconciliation, Cash Flow Management",
                zh: "应付账款、采购订单与收货核对、供应商付款、备用金、银行对账、现金流管理"
            }
        },
        {
            icon: "fa-building-columns",
            title: { id: "Internet Banking", en: "Business Internet Banking", zh: "企业网上银行" },
            description: {
                id: "BNI Direct Bisnis, myBCA Bisnis, Kopra Mandiri",
                en: "BNI Direct Bisnis, myBCA Bisnis, Kopra Mandiri",
                zh: "BNI Direct Bisnis、myBCA Bisnis、Kopra Mandiri"
            }
        },
        {
            icon: "fa-cubes",
            title: { id: "Software", en: "Software", zh: "软件工具" },
            description: {
                id: "Microsoft Excel (Advanced), Word, PowerPoint, Google Looker Studio, Power BI, AppSheet, Accurate (dasar)",
                en: "Microsoft Excel (Advanced), Word, PowerPoint, Google Looker Studio, Power BI, AppSheet, Accurate (basic)",
                zh: "Microsoft Excel（高级）、Word、PowerPoint、Google Looker Studio、Power BI、AppSheet、Accurate（基础）"
            }
        }
    ],
    spokenLanguages: [
        { id: "Bahasa Indonesia (aktif)", en: "Indonesian (fluent)", zh: "印尼语（流利）" },
        { id: "Bahasa Inggris (TOEFL ITP Prediction 487)", en: "English (TOEFL ITP Prediction 487)", zh: "英语（TOEFL ITP 模拟考试 487 分）" }
    ],
    journey: [
        {
            date: "Mar 2025 - Sekarang",
            role: { id: "Finance Officer – Account Payable", en: "Finance Officer – Accounts Payable", zh: "财务专员（应付账款）" },
            company: "PT Bharata Pharmaceutical",
            highlights: [
                { id: "Memproses sekitar 20 transaksi per hari melalui BNI Direct Bisnis, myBCA Bisnis, dan Kopra Mandiri tanpa pernah melewati SLA 1 jam per transaksi, sehingga capaian KPI terjaga.", en: "Process around 20 transactions per day via BNI Direct Bisnis, myBCA Bisnis, and Kopra Mandiri, never exceeding the 1-hour SLA per transaction and thereby safeguarding KPI performance.", zh: "每日通过 BNI Direct Bisnis、myBCA Bisnis 及 Kopra Mandiri 处理约20笔交易，从未超过每笔1小时的 SLA 时限，保障 KPI 达成。" },
                { id: "Mencocokkan purchase order (PO) dengan penerimaan barang serta membayar vendor dan biaya operasional dengan memastikan ketepatan nominal dan jadwal.", en: "Match purchase orders (POs) with goods receipts and pay vendors and operating expenses, ensuring accurate amounts and on-schedule payments.", zh: "核对采购订单（PO）与收货记录，支付供应商货款及运营费用，确保金额准确、按期付款。" },
                { id: "Mengelola arus kas Rp3–4,5 miliar per bulan pada 7 rekening perusahaan, menjaga dana operasional tetap tersedia tanpa defisit.", en: "Manage a monthly cash flow of IDR 3–4.5 billion across 7 company bank accounts, keeping operating funds available with no deficit.", zh: "管理公司7个银行账户每月30–45亿印尼盾的现金流，保持运营资金充足、无赤字。" },
                { id: "Melakukan rekonsiliasi bank mingguan untuk meningkatkan akurasi pelaporan keuangan dan meminimalkan selisih transaksi.", en: "Perform weekly bank reconciliations to improve financial reporting accuracy and minimize transaction discrepancies.", zh: "每周进行银行对账，提升财务报告准确性并减少交易差异。" },
                { id: "Bertanggung jawab atas petty cash Finance Rp3 juta per bulan: verifikasi nota, pencatatan, pengisian ulang, cek saldo fisik, dan pelaporan.", en: "Handle the Finance petty cash of IDR 3 million per month: receipt verification, expense recording, replenishment, physical cash counts, and reporting.", zh: "负责财务部每月300万印尼盾备用金：票据审核、记账、补充、现金实盘及报告。" }
            ],
            tags: ["Account Payable", "Cash Flow", "Bank Reconciliation", "Petty Cash"]
        },
        {
            date: "Okt 2023 - Jul 2024",
            role: { id: "Data Analyst Staff", en: "Data Analyst Staff", zh: "数据分析专员" },
            company: "PT Ethos Kreatif Indonesia",
            highlights: [
                { id: "Menganalisis lebih dari 500.000 data penjualan untuk menghasilkan insight performa penjualan serta pencapaian target harian dan bulanan bagi manajemen.", en: "Analyzed more than 500,000 sales records to provide management with insights on sales performance and daily and monthly target achievement.", zh: "分析超过50万条销售数据，为管理层提供销售业绩及每日、每月目标达成情况的洞察。" },
                { id: "Mengevaluasi lebih dari 10 mitra logistik (3PL) melalui analisis KPI pengiriman dan retur, membantu menurunkan return rate sekitar 3%.", en: "Evaluated more than 10 third-party logistics (3PL) partners through delivery and return KPI analysis, helping reduce the return rate by about 3%.", zh: "通过配送与退货 KPI 分析评估10多家第三方物流（3PL）合作伙伴，助力退货率降低约3%。" },
                { id: "Mengembangkan Daily Sales Dashboard untuk lebih dari 10 produk Dexa Medica di Google Looker Studio, serta mengoptimalkan dashboard per Customer Service yang berkontribusi pada kenaikan penjualan rata-rata 8% per Customer Service.", en: "Developed a Daily Sales Dashboard in Google Looker Studio for more than 10 Dexa Medica products, and optimized the per-Customer Service dashboard, contributing to an average 8% sales increase per Customer Service representative.", zh: "在 Google Looker Studio 中为10多款 Dexa Medica 产品开发每日销售仪表板，并优化各客服人员看板，助力每位客服销售额平均提升8%。" }
            ],
            tags: ["Data Analysis", "Google Looker Studio", "KPI Monitoring"]
        }
    ],
    organization: [
        {
            date: "Jan 2022 - Sep 2022",
            role: { id: "Menteri Luar Negeri", en: "Minister of External Affairs", zh: "对外联络部部长" },
            company: { id: "Badan Eksekutif Mahasiswa FEB UMP", en: "Student Executive Board, FEB UMP", zh: "UMP 经济与商学院学生会" },
            highlights: [
                { id: "Memimpin tim beranggotakan 7 orang dan menyelesaikan lebih dari 8 program kerja.", en: "Led a team of 7 and completed more than 8 work programs.", zh: "带领7人团队，完成8项以上工作计划。" },
                { id: "Menjalin kolaborasi dengan 5+ UMKM lokal dan kemitraan dengan 7+ BEM FEB lintas universitas.", en: "Built collaborations with 5+ local MSMEs and partnerships with 7+ economics and business student boards across universities.", zh: "与5家以上本地中小微企业开展合作，并与7所以上高校的经济与商学院学生会建立合作关系。" }
            ]
        }
    ],
    projects: [
        {
            id: "fincon",
            categoryGroup: "software",
            icon: "fa-calculator",
            title: {
                id: "Fincon – Financial Consolidation",
                en: "Fincon – Financial Consolidation",
                zh: "Fincon – 财务合并系统"
            },
            category: { id: "Proyek 2026", en: "2026 Project", zh: "2026年项目" },
            metric: "Supabase • Vercel",
            description: {
                id: "Merancang dan membangun aplikasi web pencatatan arus kas untuk perusahaan dagang menggunakan Supabase dan Vercel.",
                en: "Designed and built a web application for cash flow recording in trading companies using Supabase and Vercel.",
                zh: "使用 Supabase 与 Vercel，为贸易公司设计并开发现金流记录网络应用。"
            },
            tags: ["Next.js", "Supabase", "Vercel", "Cash Flow"],
            tools: ["Next.js", "Supabase", "Vercel"]
        },
        {
            id: "cashflow-dashboard",
            categoryGroup: "accounting",
            icon: "fa-chart-line",
            title: {
                id: "Dashboard Cashflow Monitoring Multi Entitas Bisnis",
                en: "Multi-Entity Cash Flow Monitoring Dashboard",
                zh: "多实体现金流监控仪表板"
            },
            category: { id: "Proyek 2025", en: "2025 Project", zh: "2025年项目" },
            metric: "AppSheet • Looker Studio",
            description: {
                id: "Membangun dashboard monitoring arus kas untuk bisnis multi entitas menggunakan AppSheet dan Google Looker Studio untuk memantau kas harian secara akurat.",
                en: "Built a multi-entity cash-flow monitoring dashboard using AppSheet and Google Looker Studio to track daily cash flow accurately.",
                zh: "利用AppSheet和Google Looker Studio构建多实体现金流监控看板，精准掌握每日资金动态。"
            },
            tags: ["AppSheet", "Google Looker Studio", "Cash Flow", "Multi-Entity"],
            problem: {
                id: "Pencatatan arus kas antar entitas bisnis dilakukan terpisah sehingga manajemen kesulitan memantau posisi kas secara harian. Hal ini menimbulkan keterlambatan keputusan alokasi dana operasional dan risiko selisih rekonsiliasi.",
                en: "Cash flow records were kept separately for each business entity, making the daily cash position hard to monitor. This led to operational fund allocation delays and reconciliation discrepancy risks.",
                zh: "各业务实体的现金流记录相互分散，导致管理层难以每日追踪资金状况，造成运营资金分配延迟及对账差异风险。"
            },
            solution: {
                id: "Mengintegrasikan input data transaksi melalui aplikasi mobile AppSheet dengan database Google Sheets yang terhubung langsung ke dashboard analitis Google Looker Studio untuk pemantauan arus kas terpusat.",
                en: "Integrated transaction data entry via AppSheet mobile app with Google Sheets database connected directly to Google Looker Studio analytical dashboard for centralized cash flow monitoring.",
                zh: "通过AppSheet移动端接入交易数据，直连Google Sheets数据库与Google Looker Studio分析看板，实现集中化现金流监控。"
            },
            tools: ["AppSheet", "Google Looker Studio", "Google Sheets"],
            documentation: {
                image: "/projects/cashflow-dashboard-demo.png",
                alt: { id: "Contoh dashboard pemantauan arus kas multi entitas dengan data dummy", en: "Example of a multi-entity cash-flow monitoring dashboard with dummy data", zh: "多实体现金流监控看板示例（模拟数据）" },
                caption: { id: "Tampilan dokumentasi menggunakan label, tanggal, dan angka dummy untuk menjaga kerahasiaan data bisnis.", en: "This documentation view uses dummy labels, dates, and values to protect business confidentiality.", zh: "此文档界面使用模拟数据标签与数值，以保护商业数据隐私。" }
            }
        },
        {
            id: "sales-logistics-analytics",
            categoryGroup: "analytics",
            icon: "fa-chart-pie",
            title: {
                id: "Sistem Analisis Penjualan & Performa Logistik (500K+ Data)",
                en: "Sales & Logistics Performance Analytics System (500K+ Records)",
                zh: "销售与物流绩效分析系统（超50万条数据）"
            },
            category: { id: "Proyek Analytics", en: "Analytics Project", zh: "数据分析项目" },
            metric: { id: "500K+ Record • -3% Return Rate", en: "500K+ Records • -3% Return Rate", zh: "超50万条数据 • 退货率降低3%" },
            description: {
                id: "Menganalisis >500.000 data penjualan dan mengevaluasi KPI 10+ mitra logistik untuk mengoptimalkan performa penjualan dan tingkat pengiriman.",
                en: "Analyzed >500,000 sales records and evaluated KPIs for 10+ logistics partners to optimize sales performance and delivery rates.",
                zh: "分析超过50万条销售数据并评估10多家物流商的KPI，全面优化销售业绩与发货效率。"
            },
            tags: ["Google Looker Studio", "Data Analysis", "Logistics KPI", "Sales Performance"],
            problem: {
                id: "Volume transaksi produk farmasi yang besar (>500.000 record) belum memiliki dashboard pemantauan KPI mitra ekspedisi dan performa penanganan tim Customer Service secara terintegrasi.",
                en: "Large pharmaceutical sales transaction volume (>500,000 records) lacked an integrated dashboard for monitoring courier partner KPIs and Customer Service team performance.",
                zh: "庞大的制药销售交易量（>50万条）缺乏针对快递物流KPI及客服团队服务绩效的集成监控看板。"
            },
            solution: {
                id: "Membangun Daily Sales & Logistics Dashboard di Google Looker Studio yang memetakan performa penanganan per CS dan metriks retur dari lebih dari 10 mitra ekspedisi secara mendalam.",
                en: "Built a Daily Sales & Logistics Dashboard in Google Looker Studio mapping CS performance and return metrics from over 10 courier partners in-depth.",
                zh: "在Google Looker Studio中开发每日销售与物流看板，深度分析每位客服代表的接单绩效及10多家快递商的退货指标。"
            },
            impact: [
                { id: "Menurunkan tingkat retur pengiriman (return rate) sekitar 3% melalui evaluasi KPI mitra logistik.", en: "Reduced logistics return rate by ~3% through logistics partner KPI evaluations.", zh: "通过物流商KPI考核，成功使发货退货率降低约3%。" },
                { id: "Mendorong peningkatan penjualan rata-rata 8% per Customer Service dengan memantau target harian.", en: "Supported an average 8% sales increase per CS representative by monitoring daily targets.", zh: "通过每日目标追踪，支持客服代表个人平均销售额提升8%。" },
                { id: "Memvisualisasikan tren penjualan harian & bulanan untuk 10+ produk Dexa Medica.", en: "Visualized daily & monthly sales trends for 10+ Dexa Medica products.", zh: "实现10多款Dexa Medica产品每日及每月销售趋势可视化。" }
            ],
            tools: ["Google Looker Studio", "Microsoft Excel (Advanced Formulas)", "SQL / Large Dataset Processing"]
        }
    ],
    education: [
        {
            degree: { id: "S1 Akuntansi", en: "Bachelor of Accounting", zh: "会计学学士" },
            institution: "Universitas Muhammadiyah Purwokerto",
            date: "Sep 2019 - Sep 2023",
            gpa: { id: "IPK 3,66 / 4,00", en: "GPA 3.66 / 4.00", zh: "GPA 3.66 / 4.00" }
        }
    ],
    certifications: [
        {
            title: { id: "Brevet Pajak A & B", en: "Brevet Tax A & B", zh: "Brevet A & B 税务专业认证" },
            provider: "BI Inspira",
            date: "2024",
            credentialId: "PPh 21, 22, 23, 4(2), PBB, Coretax",
            pdfUrl: null
        },
        {
            title: { id: "Microsoft Office Specialist: Excel 2019 Expert", en: "Microsoft Office Specialist: Excel 2019 Expert", zh: "微软 Excel 2019 专家级认证" },
            provider: "Microsoft (Certiport)",
            date: "4 Okt 2022",
            credentialId: "ID: rwb9-uSJ4 (Certiport Verified)",
            pdfUrl: "/certificates/cert-excel-expert.pdf"
        },
        {
            title: { id: "Microsoft Office Specialist: Excel 2019 Associate", en: "Microsoft Office Specialist: Excel 2019 Associate", zh: "微软 Excel 2019 初级专业认证" },
            provider: "Microsoft (Certiport)",
            date: "8 Sep 2022",
            credentialId: "ID: Pzmh-uSRY (Certiport Verified)",
            pdfUrl: "/certificates/cert-excel-associate.pdf"
        },
        {
            title: { id: "Bootcamp Finance, Accounting, Tax, & Audit", en: "Finance, Accounting, Tax, & Audit Bootcamp", zh: "财务、会计、税务与审计训练营" },
            provider: "MySkill.id",
            date: "Agt 2025",
            credentialId: "Financial Reporting, Taxation & Auditing",
            pdfUrl: null
        },
        {
            title: { id: "IT Specialist - Data Analytics", en: "IT Specialist - Data Analytics", zh: "IT 专家 - 数据分析认证" },
            provider: "Certiport (Pearson VUE)",
            date: "29 Nov 2022",
            credentialId: "ID: nDou-DkqQ (Certiport Verified)",
            pdfUrl: "/certificates/cert-data-analytics.pdf"
        },
        {
            title: { id: "IT Specialist - Databases", en: "IT Specialist - Databases", zh: "IT 专家 - 数据库 (RDBMS SQL) 认证" },
            provider: "Certiport (Pearson VUE)",
            date: "18 Okt 2022",
            credentialId: "ID: nEsY-DwzP (Certiport Verified)",
            pdfUrl: "/certificates/cert-databases.pdf"
        }
    ],
    simulatorDefaults: {
        baseRevenue: 3000000000,
        expectedGrowth: 10,
        operatingMargin: 20
    },
    translations: {
        // Nav links
        navHome: { id: "Beranda", en: "Home", zh: "首页" },
        navExpertise: { id: "Keahlian", en: "Expertise", zh: "专业技能" },
        navDemo: { id: "Demo Interaktif", en: "Interactive Demo", zh: "互动演示" },
        navProjects: { id: "Proyek", en: "Projects", zh: "项目案例" },
        navEducation: { id: "Kualifikasi", en: "Qualifications", zh: "教育认证" },
        navJourney: { id: "Riwayat", en: "Journey", zh: "工作履历" },
        navContact: { id: "Kontak", en: "Contact", zh: "联系方式" },

        // Section Headings & Descriptions
        subExpertise: { id: "Kemampuan Utama", en: "Core Capabilities", zh: "核心能力" },
        titleExpertise: { id: "Keahlian Khusus", en: "Specialized Skillset", zh: "专业技能组合" },
        
        subDemo: { id: "Pameran Interaktif", en: "Interactive Showcase", zh: "互动展示" },
        titleDemo: { id: "Dasbor Keuangan Interaktif", en: "Live Financial Dashboard", zh: "实时财务仪表板" },
        descDemo: { 
            id: "Lihat langsung bagaimana saya memvisualisasikan kesehatan keuangan dan memproyeksikan skenario bisnis. Gunakan kontrol di bawah untuk simulasi.", 
            en: "Experience firsthand how I visualize financial health and forecast scenarios. Use the interactive controls below to simulate business variables.",
            zh: "体验我如何可视化财务状况并预测商业情景。使用下方控制面板模拟商业变量。"
        },
        
        subProjects: { id: "Pekerjaan Pilihan", en: "Selected Works", zh: "精选项目" },
        titleProjects: { id: "Studi Kasus & Proyek", en: "Case Studies & Projects", zh: "项目案例研究" },

        subEducation: { id: "Kualifikasi Akademik & Profesional", en: "Academic & Professional Qualifications", zh: "学历与专业资格" },
        titleEducation: { id: "Pendidikan & Sertifikasi", en: "Education & Certifications", zh: "教育与专业认证" },
        eduAcademic: { id: "Pendidikan Akademik", en: "Academic Education", zh: "学历教育" },
        eduCerts: { id: "Sertifikasi Profesional", en: "Professional Certifications", zh: "专业认证" },

        subJourney: { id: "Jalur Profesional", en: "Professional Path", zh: "职业轨迹" },
        titleJourney: { id: "Riwayat Karir", en: "Career Milestones", zh: "工作经历" },
        
        subContact: { id: "Hubungi Saya", en: "Get In Touch", zh: "联系我" },
        titleContact: { id: "Mulai Percakapan", en: "Start a Conversation", zh: "开始沟通" },

        // Simulator Sidebar Controls
        simHeader: { id: "Modeler Skenario", en: "Scenario Modeler", zh: "情景建模器" },
        simSub: { id: "Simulasi Perusahaan v1.2", en: "Enterprise Simulator v1.2", zh: "企业财务模拟器 v1.2" },
        simRevenue: { id: "Pendapatan Tahunan Dasar", en: "Base Annual Revenue", zh: "基础年营业额" },
        simGrowth: { id: "Pertumbuhan Tahunan (%)", en: "Expected Annual Growth (%)", zh: "预期年增长率 (%)" },
        simMargin: { id: "Margin Operasional (%)", en: "Operating Margin (%)", zh: "营业利润率 (%)" },
        simReset: { id: "Reset Parameter", en: "Reset Variables", zh: "重置参数" },

        // Simulator Main Window
        simTabForecast: { id: "Proyeksi 5 Tahun", en: "5-Year Forecast", zh: "五年预测" },
        simTabCapital: { id: "Alokasi Modal", en: "Capital Breakdown", zh: "资本结构" },
        simTabRatios: { id: "Kalkulator Rasio", en: "Ratios Calculator", zh: "财务比率计算器" },
        ratiosTitle: { id: "Analisis Rasio Keuangan", en: "Financial Ratios Analysis", zh: "财务比率分析" },
        ratiosDesc: { id: "Masukkan angka neraca & laba rugi untuk menghitung rasio secara langsung.", en: "Input balance sheet & income statement figures to calculate ratios instantly.", zh: "输入资产负债表及损益表数据，即时计算财务比率。" },
        calcCa: { id: "Aset Lancar (Rp)", en: "Current Assets (Rp)", zh: "流动资产 (Rp)" },
        calcCl: { id: "Liabilitas Lancar (Rp)", en: "Current Liabilities (Rp)", zh: "流动负债 (Rp)" },
        calcNi: { id: "Laba Bersih (Rp)", en: "Net Income (Rp)", zh: "净利润 (Rp)" },
        calcRev: { id: "Pendapatan (Rp)", en: "Revenue (Rp)", zh: "营业收入 (Rp)" },
        ratioLiquidityHealthy: { id: "Likuiditas Sehat (≥1.5x)", en: "Healthy Liquidity (≥1.5x)", zh: "流动性良好 (≥1.5x)" },
        ratioLiquidityWatch: { id: "Likuiditas Perlu Diwaspadai (<1.5x)", en: "Liquidity Needs Attention (<1.5x)", zh: "流动性需关注 (<1.5x)" },
        ratioMarginHigh: { id: "Margin Profit Tinggi (≥15%)", en: "High Profit Margin (≥15%)", zh: "高利润率 (≥15%)" },
        ratioMarginStandard: { id: "Margin Operasional Standar", en: "Standard Operating Margin", zh: "标准营业利润率" },
        simYear: { id: "Tahun", en: "Year", zh: "年份" },
        ratioCurrent: { id: "Rasio Lancar (Likuiditas)", en: "Current Ratio (Liquidity)", zh: "流动比率（流动性）" },
        ratioProfit: { id: "Margin Laba Bersih (Profitabilitas)", en: "Net Profit Margin (Profitability)", zh: "净利润率（盈利能力）" },
        simChartTitle: { id: "Proyeksi Pendapatan & Laba Bersih", en: "Revenue & Net Income Projections", zh: "营收与净利润预测" },
        simChartDesc: { 
            id: "Proyeksi interaktif berdasarkan tingkat pertumbuhan dan margin.", 
            en: "Interactive projection based on growth rate and margins.",
            zh: "基于增长率和利润率的动态交互预测。"
        },
        simLegendRev: { id: "Pendapatan", en: "Revenue", zh: "营业收入" },
        simLegendNet: { id: "Laba Bersih", en: "Net Income", zh: "净利润" },
        simCapitalTitle: { id: "Alokasi Modal Optimal", en: "Optimal Capital Allocation", zh: "最佳资本配置" },
        simCapitalDesc: { 
            id: "Simulasi alokasi pengeluaran berdasarkan margin operasi.", 
            en: "Simulated breakdown of expenses based on operating margin.",
            zh: "基于营业利润率的成本支出模拟结构。"
        },

        // Donut Chart Expense Categories
        donutOperatingMargin: { id: "Margin Laba Bersih", en: "Operating Profit Margin", zh: "营业利润率" },
        donutCogs: { id: "Harga Pokok Penjualan (COGS)", en: "COGS (Cost of Sales)", zh: "营业成本 (COGS)" },
        donutExpansion: { id: "Pertumbuhan / Ekspansi", en: "Growth / Expansion", zh: "业务扩张支出" },
        donutGa: { id: "Umum & Administrasi (G&A)", en: "General & Admin", zh: "管理费用 (G&A)" },

        // Contact info section
        infoEmail: { id: "Email Saya", en: "Email Me", zh: "发送邮件" },
        infoLocation: { id: "Lokasi", en: "Location", zh: "常住地址" },
        infoIntegrity: { id: "Integritas Profesional", en: "Professional Integrity", zh: "职业合规性" },
        infoIntegrityDesc: { 
            id: "Mendukung NDA penuh untuk audit keuangan & laporan operasional.", 
            en: "Full NDAs supported for corporate audits & financial analysis.",
            zh: "支持签署保密协议（NDA）以进行企业财务审计与分析。"
        },

        // Contact Form Elements
        formName: { id: "Nama Lengkap", en: "Full Name", zh: "姓名" },
        formEmail: { id: "Alamat Email", en: "Email Address", zh: "电子邮箱" },
        formSubject: { id: "Subjek", en: "Subject", zh: "邮件主题" },
        formMessage: { id: "Pesan", en: "Message", zh: "留言内容" },
        formSubmit: { id: "Kirim Pesan", en: "Send Message", zh: "发送留言" },
        formSubmitting: { id: "Mengirim...", en: "Sending...", zh: "发送中..." },
        formSuccessHeader: { id: "Pesan Terkirim!", en: "Message Sent!", zh: "留言已发送！" },
        formSuccessDesc: { 
            id: "Terima kasih telah menghubungi. Saya akan membalas dalam waktu 24 jam.", 
            en: "Thank you for reaching out. I will get back to you within 24 hours.",
            zh: "感谢您的联系，我将在24小时内给您回复。"
        },
        formSuccessClose: { id: "Kirim pesan lainnya", en: "Send another message", zh: "发送另一条留言" },

        // Hero Buttons
        heroBtnDemo: { id: "Lihat Demo Interaktif", en: "Explore Live Demo", zh: "体验互动演示" },
        heroBtnConnect: { id: "Hubungi Saya", en: "Let's Connect", zh: "与我联系" },
        cvText: { id: "Unduh CV (PDF)", en: "Download CV (PDF)", zh: "下载简历 (PDF)" },
        cvTextShort: { id: "Unduh CV", en: "CV", zh: "简历" }
    }
};
