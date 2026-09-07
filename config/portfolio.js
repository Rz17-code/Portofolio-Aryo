// --- Portfolio Personalization Configuration (Bilingual: ID/EN) ---
export const PORTFOLIO_CONFIG = {
    profile: {
        fullName: "Rozindar Haryo Salam",
        shortName: "Project & Portofolio",
        title: { id: "Staff Accounting & Finance", en: "Accounting & Finance Staff" },
        badgeText: {
            id: "Terbuka untuk Peluang Karier",
            en: "Open to Career Opportunities"
        },
        leadText: {
            id: "Lulusan S1 Akuntansi dengan pengalaman dalam accounting, finance, dan data analysis di industri farmasi. Terampil menyusun laporan keuangan, mengelola arus kas, serta mengolah data menjadi insight bisnis.",
            en: "Accounting graduate with experience in accounting, finance, and data analysis within the pharmaceutical industry. Skilled in financial reporting, cash-flow management, and turning data into business insights."
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
            suffix: "+", 
            label: { id: "Tahun Pengalaman", en: "Years of Experience" } 
        },
        { 
            icon: "fa-vault", 
            target: 5, 
            prefix: "", 
            suffix: " Entitas", 
            label: { id: "Entitas Bisnis Dikelola", en: "Business Entities Managed" } 
        },
        { 
            icon: "fa-percent", 
            target: 34.5, 
            prefix: "", 
            suffix: " Miliar", 
            label: { id: "Arus Kas Bulanan", en: "Monthly Cash Flow" } 
        },
        { 
            icon: "fa-bezier-curve", 
            target: 500, 
            prefix: "", 
            suffix: "K+", 
            label: { id: "Data Penjualan Dianalisis", en: "Sales Records Analyzed" } 
        }
    ],
    skills: [
        {
            icon: "fa-calculator",
            title: { id: "Akuntansi & Keuangan", en: "Accounting & Finance" },
            description: {
                id: "Pencatatan transaksi, penyusunan jurnal, rekonsiliasi bank, serta laporan laba rugi, neraca, dan arus kas.",
                en: "Maintaining general ledgers, accounts payable/receivable (AP/AR), bank reconciliations, and producing accurate monthly balance sheets."
            }
        },
        {
            icon: "fa-chart-pie",
            title: { id: "Analisis Data", en: "Data Analysis" },
            description: {
                id: "Analisis data penjualan, KPI logistik, serta dashboard operasional untuk mendukung pengambilan keputusan.",
                en: "Developing departmental budgets, running variance analyses, and monitoring cash flow trends to prevent cost overruns."
            }
        },
        {
            icon: "fa-scale-balanced",
            title: { id: "Perpajakan", en: "Taxation" },
            description: {
                id: "Pemahaman PPh 21, 22, 23, PPh Pasal 4(2), PBB, dan Coretax melalui sertifikasi Brevet A&B.",
                en: "Preparing corporate tax declarations (PPN, PPh), coordinating regular audit cycles, and assuring full compliance with financial laws."
            }
        },
        {
            icon: "fa-cubes",
            title: { id: "Pelaporan & Sistem", en: "Reporting & Systems" },
            description: {
                id: "Microsoft Excel tingkat lanjut, Accurate, Google Looker Studio, Power BI, serta platform internet banking.",
                en: "Highly proficient in ERP systems (SAP, NetSuite), advanced Microsoft Excel (Pivot tables, VLOOKUP, macros), and financial database tools."
            }
        }
    ],
    journey: [
        {
            date: "Mar 2025 - Sekarang",
            role: { id: "Staff Accounting & Finance", en: "Accounting & Finance Staff" },
            company: "PT Bharata International Pharmaceutical",
            description: {
                id: "Mengelola proses accounting dan finance untuk 5 entitas bisnis, termasuk pencatatan transaksi, jurnal, laporan manajemen dan pajak, arus kas Rp34,5 miliar per bulan, pembayaran vendor, serta rekonsiliasi bank.",
                en: "Managed accounting and finance processes for five business entities, including transaction recording, journals, management and tax reporting, monthly cash flow, vendor payments, and bank reconciliation."
            },
            highlights: [
                { id: "Menyusun laporan laba rugi, neraca, dan arus kas untuk kebutuhan manajemen, pajak, serta pelaporan tahunan.", en: "Prepared profit and loss, balance sheet, and cash-flow reports for management, tax, and annual reporting." },
                { id: "Menjaga ketersediaan dana operasional dan posisi kas yang sehat untuk 5 entitas bisnis.", en: "Maintained operational fund availability and healthy cash positions for five business entities." },
                { id: "Memproses pembayaran vendor, biaya operasional, dan transfer dana melalui Kopra Mandiri dan BNI Direct.", en: "Processed vendor payments, operating expenses, and fund transfers through Kopra Mandiri and BNI Direct." },
                { id: "Melakukan rekonsiliasi bank harian dan mingguan untuk meminimalkan selisih transaksi.", en: "Performed daily and weekly bank reconciliations to minimize transaction discrepancies." }
            ],
            tags: ["Financial Reporting", "Cash Flow", "Bank Reconciliation"]
        },
        {
            date: "Okt 2023 - Jul 2024",
            role: { id: "Data Analyst Staff", en: "Data Analyst Staff" },
            company: "PT Ethos Kreatif Indonesia",
            description: {
                id: "Menganalisis lebih dari 500.000 data penjualan, mengevaluasi KPI lebih dari 10 mitra logistik, serta mengembangkan dashboard Google Looker Studio untuk produk Dexa Medica dan tim Customer Service.",
                en: "Analyzed more than 500,000 sales records, evaluated KPIs for over 10 logistics partners, and developed Google Looker Studio dashboards for Dexa Medica products and the Customer Service team."
            },
            highlights: [
                { id: "Mengolah lebih dari 500.000 data penjualan untuk memantau performa dan target harian maupun bulanan.", en: "Analyzed more than 500,000 sales records to monitor daily and monthly performance and targets." },
                { id: "Mengevaluasi KPI pengiriman dan retur dari lebih dari 10 mitra logistik, yang membantu menurunkan return rate sekitar 3%.", en: "Evaluated delivery and return KPIs for more than 10 logistics partners, helping reduce the return rate by around 3%." },
                { id: "Membangun Daily Sales Dashboard di Google Looker Studio untuk lebih dari 10 produk Dexa Medica.", en: "Built a Daily Sales Dashboard in Google Looker Studio for more than 10 Dexa Medica products." },
                { id: "Mengoptimalkan dashboard per Customer Service dan mendukung peningkatan penjualan rata-rata 8% per Customer Service.", en: "Optimized Customer Service dashboards and supported an average 8% increase in sales per Customer Service representative." }
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
                en: "Multi-Entity Cash-Flow Monitoring Dashboard"
            },
            category: { id: "Proyek 2025", en: "2025 Project" },
            metric: { id: "5 Entitas • Rp34,5M/Bln", en: "5 Entities • Rp34.5B/Mo" },
            description: {
                id: "Membangun dashboard monitoring arus kas untuk bisnis multi entitas menggunakan AppSheet dan Google Looker Studio untuk memantau kas harian secara akurat.",
                en: "Built a multi-entity cash-flow monitoring dashboard using AppSheet and Google Looker Studio to track daily cash flow accurately."
            },
            tags: ["AppSheet", "Google Looker Studio", "Cash Flow", "Multi-Entity Consolidation"],
            problem: {
                id: "Pencatatan arus kas di 5 entitas bisnis dilakukan terpisah sehingga manajemen kesulitan memantau posisi kas secara harian. Hal ini menimbulkan keterlambatan keputusan alokasi dana operasional dan risiko selisih rekonsiliasi.",
                en: "Cash flow recording across 5 business entities was fragmented, making daily cash position monitoring difficult. This led to operational fund allocation delays and reconciliation discrepancy risks."
            },
            solution: {
                id: "Mengintegrasikan input data transaksi melalui aplikasi mobile AppSheet dengan database Google Sheets yang terhubung langsung ke dashboard analitis Google Looker Studio untuk pemantauan arus kas terpusat.",
                en: "Integrated transaction data entry via AppSheet mobile app with Google Sheets database connected directly to Google Looker Studio analytical dashboard for centralized cash flow monitoring."
            },
            impact: [
                { id: "100% visibilitas arus kas harian untuk 5 entitas bisnis (total arus kas Rp34,5 Miliar/bulan).", en: "100% daily cash flow visibility across 5 business entities (total cash flow Rp34.5 Billion/month)." },
                { id: "Memangkas waktu penyusunan laporan posisi kas harian dari 3 hari menjadi otomatis & real-time.", en: "Cut daily cash position report generation time from 3 days to automated & real-time." },
                { id: "Meminimalkan risiko selisih transaksi dan mengoptimalkan pembayaran vendor harian.", en: "Minimized transaction discrepancies and optimized daily vendor payment schedules." }
            ],
            tools: ["AppSheet", "Google Looker Studio", "Google Sheets API", "BNI Direct / Kopra Mandiri Data"],
            documentation: {
                image: "/projects/cashflow-dashboard-demo.png",
                alt: { id: "Contoh dashboard pemantauan arus kas multi entitas dengan data dummy", en: "Example of a multi-entity cash-flow monitoring dashboard with dummy data" },
                caption: { id: "Tampilan dokumentasi menggunakan label, tanggal, dan angka dummy untuk menjaga kerahasiaan data bisnis.", en: "This documentation view uses dummy labels, dates, and values to protect business confidentiality." }
            }
        },
        {
            id: "sales-logistics-analytics",
            icon: "fa-chart-pie",
            title: {
                id: "Sistem Analisis Penjualan & Performa Logistik (500K+ Data)",
                en: "Sales & Logistics Performance Analytics System (500K+ Records)"
            },
            category: { id: "Proyek Analytics", en: "Analytics Project" },
            metric: { id: "500K+ Record • -3% Return Rate", en: "500K+ Records • -3% Return Rate" },
            description: {
                id: "Menganalisis >500.000 data penjualan dan mengevaluasi KPI 10+ mitra logistik untuk mengoptimalkan performa penjualan dan tingkat pengiriman.",
                en: "Analyzed >500,000 sales records and evaluated KPIs for 10+ logistics partners to optimize sales performance and delivery rates."
            },
            tags: ["Google Looker Studio", "Data Analysis", "Logistics KPI", "Sales Performance"],
            problem: {
                id: "Volume transaksi produk farmasi yang besar (>500.000 record) belum memiliki dashboard pemantauan KPI mitra ekspedisi dan performa penanganan tim Customer Service secara terintegrasi.",
                en: "Large pharmaceutical sales transaction volume (>500,000 records) lacked an integrated dashboard for monitoring courier partner KPIs and Customer Service team performance."
            },
            solution: {
                id: "Membangun Daily Sales & Logistics Dashboard di Google Looker Studio yang memetakan performa penanganan per CS dan metriks retur dari lebih dari 10 mitra ekspedisi secara mendalam.",
                en: "Built a Daily Sales & Logistics Dashboard in Google Looker Studio mapping CS performance and return metrics from over 10 courier partners in-depth."
            },
            impact: [
                { id: "Menurunkan tingkat retur pengiriman (return rate) sekitar 3% melalui evaluasi KPI mitra logistik.", en: "Reduced logistics return rate by ~3% through logistics partner KPI evaluations." },
                { id: "Mendorong peningkatan penjualan rata-rata 8% per Customer Service dengan memantau target harian.", en: "Supported an average 8% sales increase per CS representative by monitoring daily targets." },
                { id: "Memvisualisasikan tren penjualan harian & bulanan untuk 10+ produk Dexa Medica.", en: "Visualized daily & monthly sales trends for 10+ Dexa Medica products." }
            ],
        },
        {
            id: "consolidated-accounting-system",
            icon: "fa-calculator",
            title: {
                id: "Sistem Akuntansi Konsolidasi Multi-Entitas (40 Entitas CV)",
                en: "Multi-Entity Consolidated Accounting Web System (40 Entities)"
            },
            category: { id: "Proyek Software Akuntansi", en: "Accounting Web App" },
            metric: { id: "40 Entitas CV • Combined Assets Rp16,0B", en: "40 CV Entities • Combined Assets Rp16.0B" },
            description: {
                id: "Merancang dan membangun aplikasi web sistem akuntansi konsolidasi untuk mengelola pencatatan jurnal, buku besar, serta mengonsolidasikan laporan keuangan dari 40 entitas bisnis (CV) secara real-time.",
                en: "Designed and built a consolidated web accounting system application to manage journal entries, ledgers, and consolidate financial statements across 40 business entities in real-time."
            },
            tags: ["Accounting System", "Multi-Entity Consolidation", "Next.js / React", "General Ledger", "Financial Statements"],
            problem: {
                id: "Pengelolaan pencatatan akuntansi untuk 40 entitas bisnis (CV) secara terpisah sangat rentan kesalahan selisih transaksi, lambat dalam konsolidasi gabungan aset (Rp16,0B+), dan menyulitkan evaluasi profitabilitas per entitas.",
                en: "Managing accounting records across 40 separate business entities (CVs) carried high transaction discrepancy risks, delayed combined asset consolidation (Rp16.0B+), and complicated profitability tracking per entity."
            },
            solution: {
                id: "Membangun Web App Sistem Akuntansi Konsolidasi dengan modul Jurnal Kas, Utang, Piutang, Umum, Penyesuaian, Saldo Awal COA, Buku Besar, dan Dashboard Pemantauan Performa Laba/Rugi per CV berbasis data dummy terenkripsi.",
                en: "Built a Consolidated Accounting Web System with Cash/AP/AR/General/Adjusting Journal modules, COA Opening Balances, Ledgers, and Entity Profitability Analytics Dashboard using encrypted dummy data."
            },
            impact: [
                { id: "Mengonsolidasikan performa keuangan & total gabungan aset Rp16,0+ Miliar dari 40 entitas bisnis CV secara otomatis.", en: "Automated financial consolidation & combined assets of Rp16.0+ Billion across 40 business entities." },
                { id: "Memantau total omset Rp1,33B+ dan laba bersih Rp310M+ harian secara terpusat dengan akurasi 100%.", en: "Centralized daily tracking of Rp1.33B+ revenue and Rp310M+ net income with 100% accuracy." },
                { id: "Menyediakan modul jurnal kas, piutang, utang, penyesuaian, dan eliminasi transaksi inter-company secara transparan.", en: "Provided cash, AR, AP, adjusting, and inter-company elimination journal modules transparently." }
            ],
            tools: ["Next.js / React", "JavaScript", "Tailwind CSS / Glassmorphism UI", "COA & Financial Accounting Engine"],
            documentation: {
                image: "/projects/accounting-system-demo.png",
                alt: { id: "Tampilan Sistem Akuntansi Konsolidasi Multi-Entitas 40 CV", en: "Multi-Entity Consolidated Accounting System UI" },
                caption: { id: "Dokumentasi antarmuka dashboard sistem akuntansi konsolidasi memantau aset Rp16,0B+ dan performa laba/rugi 40 CV (Data Dummy disimulasikan).", en: "Interface documentation of consolidated accounting dashboard tracking Rp16.0B+ assets and 40 CV P&L performance (Simulated Dummy Data)." }
            }
        }
    ],
    education: [
        {
            degree: { id: "S1 Akuntansi", en: "Bachelor of Accounting" },
            institution: "Universitas Muhammadiyah Purwokerto",
            date: "Sep 2019 - Sep 2023",
            gpa: "IPK: 3,66 / 4,00"
        }
    ],
    certifications: [
        {
            title: { id: "Brevet Pajak A & B", en: "Brevet Tax A & B" },
            provider: "BI Inspira",
            date: "2024",
            credentialId: "PPh, PBB, dan Coretax"
        },
        {
            title: { id: "Microsoft Excel Associate & Expert", en: "Microsoft Excel Associate & Expert" },
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
        navHome: { id: "Beranda", en: "Home" },
        navExpertise: { id: "Keahlian", en: "Expertise" },
        navDemo: { id: "Demo Interaktif", en: "Interactive Demo" },
        navProjects: { id: "Proyek", en: "Projects" },
        navEducation: { id: "Kualifikasi", en: "Qualifications" },
        navJourney: { id: "Riwayat", en: "Journey" },
        navContact: { id: "Kontak", en: "Contact" },

        // Section Headings & Descriptions
        subExpertise: { id: "Kemampuan Utama", en: "Core Capabilities" },
        titleExpertise: { id: "Keahlian Khusus", en: "Specialized Skillset" },
        
        subDemo: { id: "Pameran Interaktif", en: "Interactive Showcase" },
        titleDemo: { id: "Dasbor Keuangan Interaktif", en: "Live Financial Dashboard" },
        descDemo: { 
            id: "Lihat langsung bagaimana saya memvisualisasikan kesehatan keuangan dan memproyeksikan skenario bisnis. Gunakan kontrol di bawah untuk simulasi.", 
            en: "Experience firsthand how I visualize financial health and forecast scenarios. Use the interactive controls below to simulate business variables." 
        },
        
        subProjects: { id: "Pekerjaan Pilihan", en: "Selected Works" },
        titleProjects: { id: "Studi Kasus & Proyek", en: "Case Studies & Projects" },

        subEducation: { id: "Kualifikasi Akademik & Profesional", en: "Academic & Professional Qualifications" },
        titleEducation: { id: "Pendidikan & Sertifikasi", en: "Education & Certifications" },
        eduAcademic: { id: "Pendidikan Akademik", en: "Academic Education" },
        eduCerts: { id: "Sertifikasi Profesional", en: "Professional Certifications" },

        subJourney: { id: "Jalur Profesional", en: "Professional Path" },
        titleJourney: { id: "Riwayat Karir", en: "Career Milestones" },
        
        subContact: { id: "Hubungi Saya", en: "Get In Touch" },
        titleContact: { id: "Mulai Percakapan", en: "Start a Conversation" },

        // Simulator Sidebar Controls
        simHeader: { id: "Modeler Skenario", en: "Scenario Modeler" },
        simSub: { id: "Simulasi Perusahaan v1.2", en: "Enterprise Simulator v1.2" },
        simRevenue: { id: "Pendapatan Tahunan Dasar", en: "Base Annual Revenue" },
        simGrowth: { id: "Pertumbuhan Tahunan (%)", en: "Expected Annual Growth (%)" },
        simMargin: { id: "Margin Operasional (%)", en: "Operating Margin (%)" },
        simReset: { id: "Reset Parameter", en: "Reset Variables" },

        // Simulator Main Window
        simTabForecast: { id: "Proyeksi 5 Tahun", en: "5-Year Forecast" },
        simTabCapital: { id: "Alokasi Modal", en: "Capital Breakdown" },
        simTabRatios: { id: "Kalkulator Rasio", en: "Ratios Calculator" },
        ratiosTitle: { id: "Analisis Rasio Keuangan", en: "Financial Ratios Analysis" },
        ratiosDesc: { id: "Masukkan angka neraca & laba rugi untuk menghitung rasio secara langsung.", en: "Input balance sheet & income statement figures to calculate ratios instantly." },
        calcCa: { id: "Aset Lancar ($)", en: "Current Assets ($)" },
        calcCl: { id: "Liabilitas Lancar ($)", en: "Current Liabilities ($)" },
        calcNi: { id: "Laba Bersih ($)", en: "Net Income ($)" },
        calcRev: { id: "Pendapatan ($)", en: "Revenue ($)" },
        ratioCurrent: { id: "Rasio Lancar (Likuiditas)", en: "Current Ratio (Liquidity)" },
        ratioProfit: { id: "Margin Laba Bersih (Profitabilitas)", en: "Net Profit Margin (Profitability)" },
        simChartTitle: { id: "Proyeksi Pendapatan & Laba Bersih", en: "Revenue & Net Income Projections" },
        simChartDesc: { 
            id: "Proyeksi interaktif berdasarkan tingkat pertumbuhan dan margin.", 
            en: "Interactive projection based on growth rate and margins." 
        },
        simLegendRev: { id: "Pendapatan", en: "Revenue" },
        simLegendNet: { id: "Laba Bersih", en: "Net Income" },
        simCapitalTitle: { id: "Alokasi Modal Optimal", en: "Optimal Capital Allocation" },
        simCapitalDesc: { 
            id: "Simulasi alokasi pengeluaran berdasarkan margin operasi.", 
            en: "Simulated breakdown of expenses based on operating margin." 
        },

        // Donut Chart Expense Categories
        donutOperatingMargin: { id: "Margin Laba Bersih", en: "Operating Profit Margin" },
        donutCogs: { id: "Harga Pokok Penjualan (COGS)", en: "COGS (Cost of Sales)" },
        donutExpansion: { id: "Pertumbuhan / Ekspansi", en: "Growth / Expansion" },
        donutGa: { id: "Umum & Administrasi (G&A)", en: "General & Admin" },

        // Contact info section
        infoEmail: { id: "Email Saya", en: "Email Me" },
        infoLocation: { id: "Lokasi", en: "Location" },
        infoIntegrity: { id: "Integritas Profesional", en: "Professional Integrity" },
        infoIntegrityDesc: { 
            id: "Mendukung NDA penuh untuk audit keuangan & laporan operasional.", 
            en: "Full NDAs supported for corporate audits & financial analysis." 
        },

        // Contact Form Elements
        formName: { id: "Nama Lengkap", en: "Full Name" },
        formEmail: { id: "Alamat Email", en: "Email Address" },
        formSubject: { id: "Subjek", en: "Subject" },
        formMessage: { id: "Pesan", en: "Message" },
        formSubmit: { id: "Kirim Pesan", en: "Send Message" },
        formSubmitting: { id: "Mengirim...", en: "Sending..." },
        formSuccessHeader: { id: "Pesan Terkirim!", en: "Message Sent!" },
        formSuccessDesc: { 
            id: "Terima kasih telah menghubungi. Saya akan membalas dalam waktu 24 jam.", 
            en: "Thank you for reaching out. I will get back to you within 24 hours." 
        },
        formSuccessClose: { id: "Kirim pesan lainnya", en: "Send another message" },

        // Hero Buttons
        heroBtnDemo: { id: "Lihat Demo Interaktif", en: "Explore Live Demo" },
        heroBtnConnect: { id: "Hubungi Saya", en: "Let's Connect" },
        cvText: { id: "Unduh CV (PDF)", en: "Download CV (PDF)" },
        cvTextShort: { id: "Unduh CV", en: "CV" }
    }
};
