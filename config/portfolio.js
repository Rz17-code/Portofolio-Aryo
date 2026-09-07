// --- Portfolio Personalization Configuration (Trilingual: ID / EN / ZH) ---
export const PORTFOLIO_CONFIG = {
    profile: {
        fullName: "Rozindar Haryo Salam",
        shortName: "Project & Portofolio",
        title: { id: "Staff Accounting & Finance", en: "Accounting & Finance Staff", zh: "会计与财务专员" },
        badgeText: {
            id: "Terbuka untuk Peluang Karier",
            en: "Open to Career Opportunities",
            zh: "寻求职业发展机会"
        },
        leadText: {
            id: "Lulusan S1 Akuntansi dengan pengalaman dalam accounting, finance, dan data analysis di industri farmasi. Terampil menyusun laporan keuangan, mengelola arus kas, serta mengolah data menjadi insight bisnis.",
            en: "Accounting graduate with experience in accounting, finance, and data analysis within the pharmaceutical industry. Skilled in financial reporting, cash-flow management, and turning data into business insights.",
            zh: "会计学学士，拥有制药行业会计、财务及数据分析经验。精通财务报表编制、现金流管理及商业数据洞察挖掘。"
        },
        email: "haryosalam3@gmail.com",
        phone: "081215288361",
        location: "Cilacap, Jawa Tengah",
        socials: {
            linkedin: "https://www.linkedin.com/in/rozindarharyosalam/"
        }
    },
    stats: [
        { 
            icon: "fa-business-time", 
            target: 1, 
            prefix: "", 
            suffix: "+ Tahun", 
            label: { id: "Pengalaman Accounting & Finance", en: "Accounting & Finance Experience", zh: "财会专业工作经验" } 
        },
        { 
            icon: "fa-vault", 
            target: 5, 
            prefix: "", 
            suffix: " Entitas", 
            label: { id: "Entitas Bisnis Dikelola", en: "Business Entities Managed", zh: "管理的商业实体" } 
        },
        { 
            icon: "fa-percent", 
            target: 18, 
            prefix: "", 
            suffix: " Miliar", 
            label: { id: "Arus Kas Bulanan Dikelola", en: "Monthly Cash Flow Managed", zh: "每月管理的现金流" } 
        },
        { 
            icon: "fa-bezier-curve", 
            target: 500, 
            prefix: "", 
            suffix: "K+", 
            label: { id: "Data Transaksi Accounting & Finance Dianalisis", en: "Accounting & Finance Records Analyzed", zh: "分析的财会交易数据" } 
        }
    ],
    skills: [
        {
            icon: "fa-calculator",
            title: { id: "Akuntansi & Keuangan", en: "Accounting & Finance", zh: "会计与财务" },
            description: {
                id: "Pencatatan transaksi, penyusunan jurnal, rekonsiliasi bank, serta laporan laba rugi, neraca, dan arus kas.",
                en: "Maintaining general ledgers, accounts payable/receivable (AP/AR), bank reconciliations, and producing accurate monthly balance sheets.",
                zh: "总账管理、应付/应收账款（AP/AR）、银行对账及准确编制月度资产负债表与损益表。"
            }
        },
        {
            icon: "fa-chart-pie",
            title: { id: "Analisis Data", en: "Data Analysis", zh: "数据分析" },
            description: {
                id: "Analisis data penjualan, KPI logistik, serta dashboard operasional untuk mendukung pengambilan keputusan.",
                en: "Developing departmental budgets, running variance analyses, and monitoring cash flow trends to prevent cost overruns.",
                zh: "分析销售数据、物流KPI及运营仪表板，为企业管理层决策提供数据支持。"
            }
        },
        {
            icon: "fa-scale-balanced",
            title: { id: "Perpajakan", en: "Taxation", zh: "税务管理" },
            description: {
                id: "Pemahaman PPh 21, 22, 23, PPh Pasal 4(2), PBB, dan Coretax melalui sertifikasi Brevet A&B.",
                en: "Preparing corporate tax declarations (PPN, PPh), coordinating regular audit cycles, and assuring full compliance with financial laws.",
                zh: "熟知印尼企业税法（PPh 21/22/23/4(2)、PPN及Coretax），持有Brevet A&B税务认证。"
            }
        },
        {
            icon: "fa-cubes",
            title: { id: "Pelaporan & Sistem", en: "Reporting & Systems", zh: "财务系统与报告" },
            description: {
                id: "Microsoft Excel tingkat lanjut, Accurate, Google Looker Studio, Power BI, serta platform internet banking.",
                en: "Highly proficient in ERP systems (SAP, NetSuite), advanced Microsoft Excel (Pivot tables, VLOOKUP, macros), and financial database tools.",
                zh: "精通高级Microsoft Excel（数据透视表、VLOOKUP、宏）、Accurate、Google Looker Studio及网银平台。"
            }
        }
    ],
    journey: [
        {
            date: "Mar 2025 - Sekarang",
            role: { id: "Staff Accounting & Finance", en: "Accounting & Finance Staff", zh: "会计与财务专员" },
            company: "PT Bharata International Pharmaceutical",
            description: {
                id: "Mengelola proses accounting dan finance untuk 5 entitas bisnis, termasuk pencatatan transaksi, jurnal, laporan manajemen dan pajak, arus kas Rp15 - Rp20 miliar per bulan, pembayaran vendor, serta rekonsiliasi bank.",
                en: "Managed accounting and finance processes for five business entities, including transaction recording, journals, management and tax reporting, monthly cash flow of Rp15 - Rp20 billion, vendor payments, and bank reconciliation.",
                zh: "负责5家商业实体的会计与财务管理，包括交易记录、记账凭证、管理与税务报告、每月150-200亿印尼盾的现金流管理、供应商付款及银行对账。"
            },
            highlights: [
                { id: "Menyusun laporan laba rugi, neraca, dan arus kas untuk kebutuhan manajemen, pajak, serta pelaporan tahunan.", en: "Prepared profit and loss, balance sheet, and cash-flow reports for management, tax, and annual reporting.", zh: "编制损益表、资产负债表及现金流量表，满足管理层、税务及年度报告需求。" },
                { id: "Menjaga ketersediaan dana operasional dan posisi kas yang sehat untuk 5 entitas bisnis.", en: "Maintained operational fund availability and healthy cash positions for five business entities.", zh: "保持5家商业实体的运营资金充足及健康的现金流状况。" },
                { id: "Memproses pembayaran vendor, biaya operasional, dan transfer dana melalui Kopra Mandiri dan BNI Direct.", en: "Processed vendor payments, operating expenses, and fund transfers through Kopra Mandiri and BNI Direct.", zh: "通过Kopra Mandiri及BNI Direct网银系统处理供应商付款、运营支出及资金转账。" },
                { id: "Melakukan rekonsiliasi bank harian dan mingguan untuk meminimalkan selisih transaksi.", en: "Performed daily and weekly bank reconciliations to minimize transaction discrepancies.", zh: "进行每日及每周银行对账，最大程度减少交易差异。" }
            ],
            tags: ["Financial Reporting", "Cash Flow", "Bank Reconciliation"]
        },
        {
            date: "Okt 2023 - Jul 2024",
            role: { id: "Data Analyst Staff", en: "Data Analyst Staff", zh: "数据分析专员" },
            company: "PT Ethos Kreatif Indonesia",
            description: {
                id: "Menganalisis lebih dari 500.000 data penjualan, mengevaluasi KPI lebih dari 10 mitra logistik, serta mengembangkan dashboard Google Looker Studio untuk produk Dexa Medica dan tim Customer Service.",
                en: "Analyzed more than 500,000 sales records, evaluated KPIs for over 10 logistics partners, and developed Google Looker Studio dashboards for Dexa Medica products and the Customer Service team.",
                zh: "分析超过500,000条销售数据，评估10多家物流合作伙伴的KPI，并为Dexa Medica产品及客服团队开发Google Looker Studio数据仪表板。"
            },
            highlights: [
                { id: "Mengolah lebih dari 500.000 data penjualan untuk memantau performa dan target harian maupun bulanan.", en: "Analyzed more than 500,000 sales records to monitor daily and monthly performance and targets.", zh: "处理超50万条销售数据，监控每日及每月业绩与目标的完成情况。" },
                { id: "Mengevaluasi KPI pengiriman dan retur dari lebih dari 10 mitra logistik, yang membantu menurunkan return rate sekitar 3%.", en: "Evaluated delivery and return KPIs for more than 10 logistics partners, helping reduce the return rate by around 3%.", zh: "评估10多家物流商的发货及退货KPI，助力退货率降低约3%。" },
                { id: "Membangun Daily Sales Dashboard di Google Looker Studio untuk lebih dari 10 produk Dexa Medica.", en: "Built a Daily Sales Dashboard in Google Looker Studio for more than 10 Dexa Medica products.", zh: "在Google Looker Studio中为10多款Dexa Medica产品构建每日销售仪表板。" },
                { id: "Mengoptimalkan dashboard per Customer Service dan mendukung peningkatan penjualan rata-rata 8% per Customer Service.", en: "Optimized Customer Service dashboards and supported an average 8% increase in sales per Customer Service representative.", zh: "优化客服个人看板，支持每位客服代表平均销售额提升8%。" }
            ],
            tags: ["Data Analysis", "Google Looker Studio", "KPI Monitoring"]
        }
    ],
    projects: [
        {
            id: "cashflow-dashboard",
            icon: "fa-chart-line",
            title: {
                id: "Dashboard Cashflow Monitoring Multi Entitas Bisnis",
                en: "Multi-Entity Cash-Flow Monitoring Dashboard",
                zh: "多实体现金流监控仪表板"
            },
            category: { id: "Proyek 2025", en: "2025 Project", zh: "2025年项目" },
            metric: { id: "5 Entitas • Rp15 - 20M/Bln", en: "5 Entities • Rp15 - 20B/Mo", zh: "5家实体 • 月现金流150-200亿" },
            description: {
                id: "Membangun dashboard monitoring arus kas untuk bisnis multi entitas menggunakan AppSheet dan Google Looker Studio untuk memantau kas harian secara akurat.",
                en: "Built a multi-entity cash-flow monitoring dashboard using AppSheet and Google Looker Studio to track daily cash flow accurately.",
                zh: "利用AppSheet和Google Looker Studio构建多实体现金流监控看板，精准掌握每日资金动态。"
            },
            tags: ["AppSheet", "Google Looker Studio", "Cash Flow", "Multi-Entity Consolidation"],
            problem: {
                id: "Pencatatan arus kas di 5 entitas bisnis dilakukan terpisah sehingga manajemen kesulitan memantau posisi kas secara harian. Hal ini menimbulkan keterlambatan keputusan alokasi dana operasional dan risiko selisih rekonsiliasi.",
                en: "Cash flow recording across 5 business entities was fragmented, making daily cash position monitoring difficult. This led to operational fund allocation delays and reconciliation discrepancy risks.",
                zh: "5家实体的现金流记录相互分散，导致管理层难以每日追踪资金状况，造成运营资金分配延迟及对账差异风险。"
            },
            solution: {
                id: "Mengintegrasikan input data transaksi melalui aplikasi mobile AppSheet dengan database Google Sheets yang terhubung langsung ke dashboard analitis Google Looker Studio untuk pemantauan arus kas terpusat.",
                en: "Integrated transaction data entry via AppSheet mobile app with Google Sheets database connected directly to Google Looker Studio analytical dashboard for centralized cash flow monitoring.",
                zh: "通过AppSheet移动端接入交易数据，直连Google Sheets数据库与Google Looker Studio分析看板，实现集中化现金流监控。"
            },
            impact: [
                { id: "100% visibilitas arus kas harian untuk 5 entitas bisnis (total arus kas Rp15 - Rp20 Miliar/bulan).", en: "100% daily cash flow visibility across 5 business entities (total cash flow Rp15 - Rp20 Billion/month).", zh: "实现5家实体每日现金流100%可视化（月现金流150-200亿印尼盾）。" },
                { id: "Memangkas waktu penyusunan laporan posisi kas harian dari 3 hari menjadi otomatis & real-time.", en: "Cut daily cash position report generation time from 3 days to automated & real-time.", zh: "将每日资金状况报告编制时间从3天缩短为实时自动生成。" },
                { id: "Meminimalkan risiko selisih transaksi dan mengoptimalkan pembayaran vendor harian.", en: "Minimized transaction discrepancies and optimized daily vendor payment schedules.", zh: "最大程度减少交易对账差异，优化每日供应商付款计划。" }
            ],
            tools: ["AppSheet", "Google Looker Studio", "Google Sheets API", "BNI Direct / Kopra Mandiri Data"],
            documentation: {
                image: "/projects/cashflow-dashboard-demo.png",
                alt: { id: "Contoh dashboard pemantauan arus kas multi entitas dengan data dummy", en: "Example of a multi-entity cash-flow monitoring dashboard with dummy data", zh: "多实体现金流监控看板示例（模拟数据）" },
                caption: { id: "Tampilan dokumentasi menggunakan label, tanggal, dan angka dummy untuk menjaga kerahasiaan data bisnis.", en: "This documentation view uses dummy labels, dates, and values to protect business confidentiality.", zh: "此文档界面使用模拟数据标签与数值，以保护商业数据隐私。" }
            }
        },
        {
            id: "sales-logistics-analytics",
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
        },
        {
            id: "consolidated-accounting-system",
            icon: "fa-calculator",
            title: {
                id: "Sistem Akuntansi Konsolidasi Multi-Entitas (40 Entitas CV)",
                en: "Multi-Entity Consolidated Accounting Web System (40 Entities)",
                zh: "多实体合并会计网络系统（40家企业实体）"
            },
            category: { id: "Proyek Software Akuntansi", en: "Accounting Web App", zh: "财会软件项目" },
            metric: { id: "40 Entitas CV • Combined Assets Rp16,0B", en: "40 CV Entities • Combined Assets Rp16.0B", zh: "40家企业 • 合并总资产160亿" },
            description: {
                id: "Merancang dan membangun aplikasi web sistem akuntansi konsolidasi untuk mengelola pencatatan jurnal, buku besar, serta mengonsolidasikan laporan keuangan dari 40 entitas bisnis (CV) secara real-time.",
                en: "Designed and built a consolidated web accounting system application to manage journal entries, ledgers, and consolidate financial statements across 40 business entities in real-time.",
                zh: "设计并开发多实体合并会计网络系统，实现40家商业实体的记账凭证、总账及财务报表实时合并。"
            },
            tags: ["Accounting System", "Multi-Entity Consolidation", "Next.js / React", "General Ledger", "Financial Statements"],
            problem: {
                id: "Pengelolaan pencatatan akuntansi untuk 40 entitas bisnis (CV) secara terpisah sangat rentan kesalahan selisih transaksi, lambat dalam konsolidasi gabungan aset (Rp16,0B+), dan menyulitkan evaluasi profitabilitas per entitas.",
                en: "Managing accounting records across 40 separate business entities (CVs) carried high transaction discrepancy risks, delayed combined asset consolidation (Rp16.0B+), and complicated profitability tracking per entity.",
                zh: "独立管理40家企业的财务极易产生账目对账错误，且合并160多亿总资产速度缓慢，难以评估单家实体的盈利能力。"
            },
            solution: {
                id: "Membangun Web App Sistem Akuntansi Konsolidasi dengan modul Jurnal Kas, Utang, Piutang, Umum, Penyesuaian, Saldo Awal COA, Buku Besar, dan Dashboard Pemantauan Performa Laba/Rugi per CV berbasis data dummy terenkripsi.",
                en: "Built a Consolidated Accounting Web System with Cash/AP/AR/General/Adjusting Journal modules, COA Opening Balances, Ledgers, and Entity Profitability Analytics Dashboard using encrypted dummy data.",
                zh: "开发合并会计Web系统，包含现金凭证、应付、应收、通用、期末调整凭证、科目初始余额、总账及各实体损益看板。"
            },
            impact: [
                { id: "Mengonsolidasikan performa keuangan & total gabungan aset Rp16,0+ Miliar dari 40 entitas bisnis CV secara otomatis.", en: "Automated financial consolidation & combined assets of Rp16.0+ Billion across 40 business entities.", zh: "自动合并40家企业的财务绩效及160多亿印尼盾的总资产。" },
                { id: "Memantau total omset Rp1,33B+ dan laba bersih Rp310M+ harian secara terpusat dengan akurasi 100%.", en: "Centralized daily tracking of Rp1.33B+ revenue and Rp310M+ net income with 100% accuracy.", zh: "集中监控日营业额13.3亿+及净利润3.1亿+，准确率达100%。" },
                { id: "Menyediakan modul jurnal kas, piutang, utang, penyesuaian, dan eliminasi transaksi inter-company secara transparan.", en: "Provided cash, AR, AP, adjusting, and inter-company elimination journal modules transparently.", zh: "提供透明的现金、应收、应付、调整及内部交易消除凭证模块。" }
            ],
            tools: ["Next.js / React", "JavaScript", "Tailwind CSS / Glassmorphism UI", "COA & Financial Accounting Engine"],
            documentation: {
                image: "/projects/accounting-system-demo.png",
                alt: { id: "Tampilan Sistem Akuntansi Konsolidasi Multi-Entitas 40 CV", en: "Multi-Entity Consolidated Accounting System UI", zh: "40家实体合并会计系统界面" },
                caption: { id: "Dokumentasi antarmuka dashboard sistem akuntansi konsolidasi memantau aset Rp16,0B+ dan performa laba/rugi 40 CV (Data Dummy disimulasikan).", en: "Interface documentation of consolidated accounting dashboard tracking Rp16.0B+ assets and 40 CV P&L performance (Simulated Dummy Data).", zh: "合并会计系统看板界面文档，监控160亿+资产及40家实体损益（模拟数据）。" }
            }
        }
    ],
    education: [
        {
            degree: { id: "S1 Akuntansi", en: "Bachelor of Accounting", zh: "会计学学士" },
            institution: "Universitas Muhammadiyah Purwokerto",
            date: "Sep 2019 - Sep 2023",
            gpa: "IPK: 3,66 / 4,00"
        }
    ],
    certifications: [
        {
            title: { id: "Brevet Pajak A & B", en: "Brevet Tax A & B", zh: "Brevet A & B 税务专业认证" },
            provider: "BI Inspira",
            date: "2024",
            credentialId: "PPh, PBB, dan Coretax"
        },
        {
            title: { id: "Microsoft Excel Associate & Expert", en: "Microsoft Excel Associate & Expert", zh: "微软 Excel 专家与高级认证" },
            provider: "Microsoft",
            date: "2022",
            credentialId: "Advanced Formula & Data Analysis"
        }
    ],
    simulatorDefaults: {
        baseRevenue: 3000000,
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
        calcCa: { id: "Aset Lancar ($)", en: "Current Assets ($)", zh: "流动资产 ($)" },
        calcCl: { id: "Liabilitas Lancar ($)", en: "Current Liabilities ($)", zh: "流动负债 ($)" },
        calcNi: { id: "Laba Bersih ($)", en: "Net Income ($)", zh: "净利润 ($)" },
        calcRev: { id: "Pendapatan ($)", en: "Revenue ($)", zh: "营业收入 ($)" },
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
