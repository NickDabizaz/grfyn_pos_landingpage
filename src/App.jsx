import { useState, useEffect } from 'react'
import {
  ShoppingCart, BarChart3, Package, Users, Zap, Shield,
  ChevronRight, Menu, X, Star, ArrowRight, CheckCircle2,
  Clock, Receipt, Smartphone, TrendingUp, Lock, Globe
} from 'lucide-react'
import './index.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Fitur', href: '#fitur' },
    { label: 'Cara Kerja', href: '#cara-kerja' },
    { label: 'Harga', href: '#harga' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center">
              <ShoppingCart className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-dark-800">Grfyn POS</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-dark-500 hover:text-primary-600 transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="/login" className="text-sm font-medium text-dark-500 hover:text-primary-600 transition-colors px-4 py-2">
              Masuk
            </a>
            <a href="/register" className="text-sm font-semibold text-white bg-primary-500 hover:bg-primary-600 transition-colors px-5 py-2.5 rounded-xl">
              Coba Gratis
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-dark-500">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass border-t border-primary-100">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block text-sm font-medium text-dark-500 hover:text-primary-600 py-2">
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-primary-100 flex flex-col gap-2">
              <a href="/login" className="text-sm font-medium text-dark-500 text-center py-2">Masuk</a>
              <a href="/register" className="text-sm font-semibold text-white bg-primary-500 text-center py-2.5 rounded-xl">Coba Gratis</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-200/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold mb-8 animate-in">
            <Star className="w-3.5 h-3.5 fill-primary-500 text-primary-500" />
            Solusi POS Terpercaya untuk UMKM Indonesia
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-dark-900 leading-tight mb-6 animate-in stagger-1">
            Kelola Bisnis Lebih <span className="text-primary-500">Mudah</span> & <span className="text-accent-600">Cepat</span>
          </h1>

          <p className="text-base md:text-lg text-dark-400 leading-relaxed mb-10 max-w-2xl mx-auto animate-in stagger-2">
            Grfyn POS membantu Anda mengelola penjualan, stok barang, dan laporan keuangan dalam satu platform yang simpel dan powerful. Cocok untuk toko retail, restoran, dan bisnis apapun.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12 animate-in stagger-3">
            <a href="/register" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-semibold transition-all shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30">
              Mulai Gratis 14 Hari
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#fitur" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-primary-200 text-dark-600 font-semibold hover:bg-primary-50 transition-all">
              Pelajari Fitur
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 text-xs text-dark-400 animate-in stagger-4">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-accent-500" />
              <span>Tanpa kartu kredit</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-accent-500" />
              <span>Bisa dibatalkan kapan saja</span>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20 relative animate-in stagger-5">
          <div className="relative mx-auto max-w-5xl rounded-2xl md:rounded-3xl border border-primary-100 bg-card shadow-2xl shadow-primary-900/5 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-8 md:h-10 bg-warm-50 border-b border-primary-100 flex items-center px-4 gap-2">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-amber-400" />
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-emerald-400" />
            </div>
            <div className="pt-10 md:pt-12 p-4 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="col-span-2 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-dark-400">Total Penjualan Hari Ini</p>
                      <p className="text-2xl md:text-3xl font-bold text-dark-800">Rp 12.450.000</p>
                    </div>
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-600 text-xs font-semibold">
                      <TrendingUp className="w-3.5 h-3.5" />
                      +24%
                    </div>
                  </div>
                  <div className="h-32 md:h-40 rounded-xl bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-100 flex items-end px-4 pb-4 gap-2">
                    {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t-md bg-primary-400/80 hover:bg-primary-500 transition-colors" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-warm-50 border border-warm-100">
                    <div className="flex items-center gap-2 mb-2">
                      <ShoppingCart className="w-4 h-4 text-primary-500" />
                      <span className="text-xs font-semibold text-dark-500">Transaksi</span>
                    </div>
                    <p className="text-xl font-bold text-dark-800">142</p>
                  </div>
                  <div className="p-4 rounded-xl bg-accent-50 border border-accent-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Package className="w-4 h-4 text-accent-600" />
                      <span className="text-xs font-semibold text-dark-500">Stok Menipis</span>
                    </div>
                    <p className="text-xl font-bold text-dark-800">8 Item</p>
                  </div>
                  <div className="p-4 rounded-xl bg-primary-50 border border-primary-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-primary-600" />
                      <span className="text-xs font-semibold text-dark-500">Pelanggan</span>
                    </div>
                    <p className="text-xl font-bold text-dark-800">56</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Features() {
  const features = [
    {
      icon: ShoppingCart,
      title: 'Transaksi Cepat',
      desc: 'Proses penjualan hanya dalam hitungan detik. Dukungan untuk barcode scanner dan multi-payment.',
      color: 'bg-primary-50 text-primary-600 border-primary-100',
    },
    {
      icon: Package,
      title: 'Manajemen Stok',
      desc: 'Pantau stok barang real-time, dapatkan notifikasi saat stok menipis, dan kelola supplier dengan mudah.',
      color: 'bg-accent-50 text-accent-600 border-accent-100',
    },
    {
      icon: BarChart3,
      title: 'Laporan Lengkap',
      desc: 'Analisis penjualan, laba rugi, dan performa produk dengan grafik yang mudah dipahami.',
      color: 'bg-warm-50 text-warm-600 border-warm-100',
    },
    {
      icon: Users,
      title: 'Data Pelanggan & Supplier',
      desc: 'Kelola database pelanggan dan supplier lengkap dengan riwayat transaksi.',
      color: 'bg-primary-50 text-primary-600 border-primary-100',
    },
    {
      icon: Receipt,
      title: 'Multi Cabang & Kasir',
      desc: 'Kelola banyak cabang dan kasir dalam satu akun. Pantau performa masing-masing cabang.',
      color: 'bg-accent-50 text-accent-600 border-accent-100',
    },
    {
      icon: Smartphone,
      title: 'Akses di Mana Saja',
      desc: 'Berbasis web, bisa diakses dari laptop, tablet, maupun smartphone kapanpun Anda mau.',
      color: 'bg-warm-50 text-warm-600 border-warm-100',
    },
  ]

  return (
    <section id="fitur" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary-600 mb-3">FITUR LENGKAP</p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">Semua yang Anda Butuhkan</h2>
          <p className="text-dark-400">Grfyn POS hadir dengan fitur lengkap untuk mempermudah operasional bisnis Anda sehari-hari.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group p-6 rounded-2xl bg-card border border-primary-100/60 card-hover">
              <div className={`w-12 h-12 rounded-xl ${f.color} border flex items-center justify-center mb-5`}>
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-dark-800 mb-2">{f.title}</h3>
              <p className="text-sm text-dark-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Daftar Akun',
      desc: 'Buat akun Grfyn POS dalam 2 menit. Tidak perlu kartu kredit dan gratis 14 hari.',
    },
    {
      num: '02',
      title: 'Atur Toko Anda',
      desc: 'Masukkan data toko, tambahkan produk, dan atur stok awal dengan mudah.',
    },
    {
      num: '03',
      title: 'Mulai Berjualan',
      desc: 'Gunakan Grfyn POS untuk transaksi harian dan pantau bisnis Anda tumbuh.',
    },
  ]

  return (
    <section id="cara-kerja" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary-600 mb-3">CARA KERJA</p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">Mulai dalam 3 Langkah</h2>
          <p className="text-dark-400">Tidak perlu instalasi rumit. Cukup daftar, atur, dan langsung gunakan.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary-500 text-white flex items-center justify-center text-xl font-bold mb-6 shadow-lg shadow-primary-500/20">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-dark-800 mb-2">{step.title}</h3>
              <p className="text-sm text-dark-400 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%]">
                  <div className="h-0.5 bg-primary-100 w-full" />
                  <ChevronRight className="w-4 h-4 text-primary-300 absolute -right-1 -top-2" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stats() {
  const stats = [
    { value: '2.500+', label: 'Bisnis Aktif', icon: Store },
    { value: '10jt+', label: 'Transaksi/Bulan', icon: Receipt },
    { value: '99.9%', label: 'Uptime', icon: Zap },
    { value: '4.9/5', label: 'Rating Pengguna', icon: Star },
  ]

  function Store(props) {
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63a.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63a.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63a.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63a.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"/></svg>
    )
  }

  return (
    <section className="py-16 bg-primary-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <s.icon className="w-6 h-6 text-primary-200 mx-auto mb-3" />
              <p className="text-3xl md:text-4xl font-extrabold text-white mb-1">{s.value}</p>
              <p className="text-sm text-primary-100">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 'Gratis',
      desc: 'Cocok untuk bisnis yang baru mulai',
      features: ['1 Kasir', '100 Produk', 'Laporan Harian', 'Support Email'],
      cta: 'Daftar Gratis',
      popular: false,
    },
    {
      name: 'Bisnis',
      price: 'Rp 149rb',
      period: '/bulan',
      desc: 'Untuk bisnis yang sedang berkembang',
      features: ['5 Kasir', 'Produk Unlimited', 'Laporan Lengkap', 'Multi Cabang', 'Support Prioritas', 'Export Excel/PDF'],
      cta: 'Mulai Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      desc: 'Solusi khusus untuk bisnis besar',
      features: ['Kasir Unlimited', 'API Access', 'Dedicated Support', 'On-premise Option', 'Custom Integrasi', 'SLA Guarantee'],
      cta: 'Hubungi Kami',
      popular: false,
    },
  ]

  return (
    <section id="harga" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary-600 mb-3">HARGA TRANSPARAN</p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">Pilih Paket yang Sesuai</h2>
          <p className="text-dark-400">Tidak ada biaya tersembunyi. Upgrade atau downgrade kapan saja sesuai kebutuhan.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={`relative rounded-2xl p-6 md:p-8 ${plan.popular ? 'bg-dark-900 text-white shadow-xl shadow-dark-900/20' : 'bg-card border border-primary-100/60'}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary-500 text-white text-xs font-bold">
                  PALING POPULER
                </div>
              )}
              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-1 ${plan.popular ? 'text-white' : 'text-dark-800'}`}>{plan.name}</h3>
                <p className={`text-sm ${plan.popular ? 'text-dark-200' : 'text-dark-400'}`}>{plan.desc}</p>
              </div>
              <div className="mb-6">
                <span className={`text-3xl font-extrabold ${plan.popular ? 'text-white' : 'text-dark-900'}`}>{plan.price}</span>
                {plan.period && <span className={`text-sm ${plan.popular ? 'text-dark-200' : 'text-dark-400'}`}>{plan.period}</span>}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm">
                    <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${plan.popular ? 'text-primary-400' : 'text-accent-500'}`} />
                    <span className={plan.popular ? 'text-dark-100' : 'text-dark-500'}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/register"
                className={`block text-center w-full py-3 rounded-xl text-sm font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-primary-500 hover:bg-primary-600 text-white'
                    : 'bg-primary-50 hover:bg-primary-100 text-primary-700'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const faqs = [
    {
      q: 'Apakah Grfyn POS bisa digunakan offline?',
      a: 'Saat ini Grfyn POS berbasis web dan membutuhkan koneksi internet. Namun, kami sedang mengembangkan fitur offline mode yang akan dirilis segera.',
    },
    {
      q: 'Bagaimana cara migrasi dari POS lain?',
      a: 'Anda bisa mengimpor data produk dan stok melalui file Excel/CSV. Tim support kami juga siap membantu proses migrasi secara gratis.',
    },
    {
      q: 'Apakah data saya aman?',
      a: 'Sangat aman. Kami menggunakan enkripsi SSL, backup otomatis harian, dan server berstandar enterprise untuk menjaga keamanan data Anda.',
    },
    {
      q: 'Bisa digunakan di perangkat apa saja?',
      a: 'Grfyn POS bisa diakses dari browser Chrome, Safari, Firefox di laptop, tablet, maupun smartphone. Tidak perlu instalasi aplikasi.',
    },
    {
      q: 'Bagaimana sistem pembayaran yang didukung?',
      a: 'Kami mendukung cash, transfer bank, QRIS, GoPay, OVO, DANA, dan LinkAja. Integrasi dengan payment gateway juga tersedia di paket Enterprise.',
    },
  ]

  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary-600 mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">Pertanyaan yang Sering Diajukan</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border border-primary-100 bg-card overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left"
              >
                <span className="text-sm font-semibold text-dark-800 pr-4">{faq.q}</span>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openIndex === i ? 'bg-primary-500 text-white' : 'bg-warm-50 text-dark-400'}`}>
                  {openIndex === i ? <X className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5 rotate-90" />}
                </div>
              </button>
              {openIndex === i && (
                <div className="px-4 md:px-5 pb-4 md:pb-5 text-sm text-dark-400 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl bg-dark-900 overflow-hidden p-8 md:p-16 text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Siap Mengelola Bisnis Lebih Baik?</h2>
            <p className="text-dark-200 mb-8 max-w-lg mx-auto">Coba Grfyn POS gratis selama 14 hari. Tidak perlu kartu kredit dan bisa dibatalkan kapan saja.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="/register" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-semibold transition-colors shadow-lg shadow-primary-500/20">
                Mulai Gratis 14 Hari
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="mailto:hello@grfyn.id" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-dark-600 text-dark-200 font-semibold hover:bg-dark-800 transition-colors">
                Hubungi Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-white border-t border-primary-100 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center">
                <ShoppingCart className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-dark-800">Grfyn POS</span>
            </a>
            <p className="text-sm text-dark-400 leading-relaxed mb-4">
              Sistem Point of Sale modern untuk UMKM Indonesia. Kelola bisnis lebih mudah, cepat, dan terorganisir.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-lg bg-warm-50 flex items-center justify-center text-dark-400 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-warm-50 flex items-center justify-center text-dark-400 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                <Lock className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-dark-800 mb-4">Produk</h4>
            <ul className="space-y-2.5">
              {['Fitur', 'Harga', 'Integrasi', 'Update'].map((item) => (
                <li key={item}><a href="#" className="text-sm text-dark-400 hover:text-primary-600 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-dark-800 mb-4">Perusahaan</h4>
            <ul className="space-y-2.5">
              {['Tentang Kami', 'Blog', 'Karir', 'Kontak'].map((item) => (
                <li key={item}><a href="#" className="text-sm text-dark-400 hover:text-primary-600 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-dark-800 mb-4">Bantuan</h4>
            <ul className="space-y-2.5">
              {['Pusat Bantuan', 'Dokumentasi', 'Status', 'FAQ'].map((item) => (
                <li key={item}><a href="#" className="text-sm text-dark-400 hover:text-primary-600 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-dark-300">2026 Grfyn POS. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-dark-300 hover:text-dark-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-dark-300 hover:text-dark-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
