// --- Portfolio Personalization Configuration (Bilingual: ID/EN) ---
const PORTFOLIO_CONFIG = {
    profile: {
        fullName: "Rozindar Haryo Salam",
        shortName: "ROZINDAR",
        title: {
            id: "Staf Akuntansi & Keuangan",
            en: "Accounting & Finance Staff"
        },
        badgeText: {
            id: "Tersedia untuk Posisi Penuh Waktu & Konsultasi",
            en: "Available for Full-time Roles & Consulting"
        },
        leadText: {
            id: "Spesialis dalam akuntansi korporat, analisis keuangan, dan pengelolaan buku besar yang presisi. Berdedikasi untuk menerjemahkan angka menjadi wawasan kesehatan bisnis yang jelas.",
            en: "Specializing in corporate accounting, financial analysis, and precise ledger management. Dedicated to translating numbers into clear, actionable business insights."
        },
        email: "rozindar.salam@example.com", // Ganti dengan email asli Anda
        location: "Jakarta, Indonesia",
        socials: {
            linkedin: "https://linkedin.com/in/rozindar-haryo-salam", // Ganti dengan tautan asli Anda
            github: "https://github.com/rozindar",
            twitter: "#"
        }
    },
    stats: [
        { 
            icon: "fa-business-time", 
            target: 3, 
            prefix: "", 
            suffix: "+", 
            label: { id: "Tahun Pengalaman", en: "Years of Experience" } 
        },
        { 
            icon: "fa-vault", 
            target: 5, 
            prefix: "$", 
            suffix: "M+", 
            label: { id: "Anggaran Dikelola", en: "Budgets Managed" } 
        },
        { 
            icon: "fa-percent", 
            target: 100, 
            prefix: "", 
            suffix: "%", 
            label: { id: "Akurasi Pajak & Kepatuhan", en: "Tax & Compliance Accuracy" } 
        },
        { 
            icon: "fa-bezier-curve", 
            target: 15, 
            prefix: "", 
            suffix: "+", 
            label: { id: "Laporan Keuangan Dibuat", en: "Financial Reports Built" } 
        }
    ],
    skills: [
        {
            icon: "fa-calculator",
            title: { id: "Akuntansi Keuangan", en: "Financial Accounting" },
            description: {
                id: "Mengelola buku besar, piutang/utang (AP/AR), rekonsiliasi bank, dan menyusun neraca keuangan bulanan yang akurat.",
                en: "Maintaining general ledgers, accounts payable/receivable (AP/AR), bank reconciliations, and producing accurate monthly balance sheets."
            }
        },
        {
            icon: "fa-chart-pie",
            title: { id: "Penganggaran & Analisis", en: "Budgeting & Analysis" },
            description: {
                id: "Menyusun anggaran departemen, melakukan analisis varians, dan memantau arus kas untuk mencegah kelebihan biaya.",
                en: "Developing departmental budgets, running variance analyses, and monitoring cash flow trends to prevent cost overruns."
            }
        },
        {
            icon: "fa-scale-balanced",
            title: { id: "Pajak & Kepatuhan", en: "Tax & Compliance" },
            description: {
                id: "Menyiapkan deklarasi pajak perusahaan (PPN, PPh), mengoordinasikan siklus audit, dan memastikan kepatuhan penuh terhadap hukum perpajakan.",
                en: "Preparing corporate tax declarations (PPN, PPh), coordinating regular audit cycles, and assuring full compliance with financial laws."
            }
        },
        {
            icon: "fa-cubes",
            title: { id: "Penguasaan ERP & Sistem", en: "ERP & Systems Mastery" },
            description: {
                id: "Sangat mahir dalam sistem ERP (SAP, NetSuite), rumus lanjutan Microsoft Excel (Pivot, VLOOKUP, makro), dan pengelolaan database.",
                en: "Highly proficient in ERP systems (SAP, NetSuite), advanced Microsoft Excel (Pivot tables, VLOOKUP, macros), and financial database tools."
            }
        }
    ],
    journey: [
        {
            date: "2024 - Present",
            role: { id: "Spesialis Akuntansi & Keuangan", en: "Accounting & Finance Specialist" },
            company: "PT Solusi Finansial Utama",
            description: {
                id: "Memimpin rekonsiliasi buku besar, mengoptimalkan siklus penutupan buku bulanan sebesar 20%, dan menyusun perkiraan anggaran dinamis untuk proyek korporat.",
                en: "Led general ledger reconciliation, optimized monthly closing cycles by 20%, and drafted dynamic budgeting forecasts for corporate projects."
            },
            tags: ["Corporate Accounting", "SAP ERP", "Tax Compliance"]
        },
        {
            date: "2022 - 2024",
            role: { id: "Asosiasi Keuangan Junior", en: "Junior Finance Associate" },
            company: "Aura Capital Corp",
            description: {
                id: "Membantu mengelola piutang dan utang dagang, menganalisis posisi kas harian, dan menyiapkan ringkasan dasbor Excel untuk ditinjau oleh manajemen senior.",
                en: "Assisted in managing accounts receivable and payable, analyzed daily cash positions, and prepared Excel dashboard summaries for senior reviews."
            },
            tags: ["AP/AR Management", "Cash Flow Analysis", "Excel VBA"]
        },
        {
            date: "2020 - 2022",
            role: { id: "Magang Akuntansi", en: "Accounting Intern" },
            company: "Local Audit Partners",
            description: {
                id: "Membantu auditor senior selama pelaporan pajak tahunan, memeriksa pembukuan entri ganda, dan mengarsipkan dokumen sumber keuangan.",
                en: "Supported senior auditors during annual tax filings, performed double-entry bookkeeping checks, and cataloged financial source documents."
            },
            tags: ["Tax Auditing", "Bookkeeping", "Journal Entries"]
        }
    ],
    projects: [
        {
            icon: "fa-money-bill-transfer",
            title: {
                id: "Optimasi Piutang & Utang Dagang (AP/AR)",
                en: "AP/AR Optimization & Reconciliation"
            },
            category: { id: "Manajemen Keuangan", en: "Financial Management" },
            description: {
                id: "Merestrukturisasi sistem penagihan piutang dan pembayaran utang dagang, meningkatkan perputaran arus kas dan meminimalkan keterlambatan pelaporan keuangan.",
                en: "Restructured the invoicing and vendor payout processes, enhancing cash conversion cycle times and eliminating financial reconciliation backlogs."
            },
            metric: { id: "Efisiensi +25%", en: "Efficiency +25%" },
            tags: ["AP/AR", "Cash Flow", "Vendor Management"]
        },
        {
            icon: "fa-file-invoice-dollar",
            title: {
                id: "Kepatuhan Pajak & Audit Penutupan Buku",
                en: "Tax Compliance & Book Closing Audits"
            },
            category: { id: "Perpajakan & Audit", en: "Taxation & Auditing" },
            description: {
                id: "Mengelola pengisian SPT Badan Masa dan Tahunan (PPN, PPh 21/23/25), serta memimpin audit laporan keuangan eksternal dengan hasil opini wajar tanpa pengecualian.",
                en: "Managed annual and monthly corporate tax declarations (PPN, PPh), and led external audits yielding clean, unqualified audit opinions."
            },
            metric: { id: "100% Kepatuhan", en: "100% Compliance" },
            tags: ["Corporate Tax", "External Audit", "Financial Statements"]
        },
        {
            icon: "fa-chart-simple",
            title: {
                id: "Model Anggaran & Proyeksi Finansial",
                en: "Financial Forecasting & Budget Modeling"
            },
            category: { id: "Analisis Keuangan", en: "Financial Analysis" },
            description: {
                id: "Membangun templat pemodelan keuangan otomatis menggunakan Excel makro VBA yang digunakan untuk memproyeksikan arus kas bulanan proyek ekspansi bisnis.",
                en: "Built automated financial forecasting sheets via Excel VBA macros, used to project monthly cash flows and return on investment for expansion projects."
            },
            metric: { id: "Akurasi 98%", en: "98% Accuracy" },
            tags: ["Financial Modeling", "Excel VBA", "Budgeting"]
        }
    ],
    education: [
        {
            degree: { id: "Sarjana Akuntansi (S.Ak)", en: "Bachelor of Science in Accounting" },
            institution: "Universitas Indonesia",
            date: "2018 - 2022",
            gpa: "GPA: 3.75 / 4.00"
        }
    ],
    certifications: [
        {
            title: { id: "Sertifikasi Brevet Pajak A & B", en: "Brevet Tax A & B Certification" },
            provider: "Ikatan Akuntan Indonesia (IAI)",
            date: "2023",
            credentialId: "Cred: TAX-IAI-2023-9988"
        },
        {
            title: { id: "Microsoft Office Specialist: Excel Expert", en: "MOS: Excel Expert" },
            provider: "Microsoft",
            date: "2022",
            credentialId: "Cred: MS-EXCEL-887766"
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
