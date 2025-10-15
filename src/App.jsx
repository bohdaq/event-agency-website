import React, { useState } from 'react'
import {
    Menu, X, Heart, Calendar, Users, Sparkles,
    Mail, Phone, MapPin, Instagram, Facebook,
    Twitter, ChevronRight, Star, Award, Clock
} from 'lucide-react'

function App() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        eventType: 'Wedding',
        message: ''
    })
    const [formStatus, setFormStatus] = useState('')

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setFormStatus('sending')

        try {
            // Using Formspree's direct email endpoint
            const response = await fetch('https://formspree.io/f/xrbyrezk', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    eventType: formData.eventType,
                    message: formData.message,
                    _replyto: formData.email,
                    _subject: `New Event Inquiry: ${formData.eventType}`,
                    _to: 'bohdaq@gmail.com'
                })
            })

            if (response.ok) {
                setFormStatus('success')
                setFormData({ name: '', email: '', eventType: 'Wedding', message: '' })
                setTimeout(() => setFormStatus(''), 5000)
            } else {
                const data = await response.json()
                console.error('Form submission error:', data)
                setFormStatus('error')
            }
        } catch (error) {
            console.error('Network error:', error)
            setFormStatus('error')
        }
    }

    const services = [
        {
            icon: Heart,
            title: 'Weddings',
            description: 'Create your dream wedding with our expert planning and stunning designs that capture your love story.',
            features: ['Venue Selection', 'Floral Design', 'Custom Decor', 'Day-of Coordination']
        },
        {
            icon: Calendar,
            title: 'Birthday Parties',
            description: 'Celebrate another year with unforgettable birthday parties tailored to any age and theme.',
            features: ['Theme Development', 'Entertainment', 'Catering', 'Party Favors']
        },
        {
            icon: Sparkles,
            title: 'Corporate Events',
            description: 'Impress clients and motivate teams with professionally designed corporate celebrations.',
            features: ['Brand Integration', 'Team Building', 'Networking Events', 'Product Launches']
        },
        {
            icon: Users,
            title: 'Special Celebrations',
            description: 'From anniversaries to graduations, we make every milestone memorable and magical.',
            features: ['Custom Themes', 'Venue Styling', 'Guest Management', 'Photography Coordination']
        }
    ]

    const testimonials = [
        {
            name: 'Sarah Johnson',
            event: 'Wedding',
            rating: 5,
            text: 'Absolutely magical! They transformed our vision into reality and exceeded all expectations.'
        },
        {
            name: 'Michael Chen',
            event: 'Corporate Gala',
            rating: 5,
            text: 'Professional, creative, and flawless execution. Our clients were thoroughly impressed.'
        },
        {
            name: 'Emily Rodriguez',
            event: 'Birthday Party',
            rating: 5,
            text: 'My daughter\'s 10th birthday was a dream come true. Every detail was perfect!'
        }
    ]

    const stats = [
        { icon: Award, value: '500+', label: 'Events Completed' },
        { icon: Users, value: '1000+', label: 'Happy Clients' },
        { icon: Star, value: '5.0', label: 'Average Rating' },
        { icon: Clock, value: '10+', label: 'Years Experience' }
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <Sparkles className="h-8 w-8 text-primary-600" />
                            <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-primary-600 to-pink-600 bg-clip-text text-transparent">
                                Elegant Events
                            </span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8">
                            <a href="#home" className="text-gray-700 hover:text-primary-600 transition">Home</a>
                            <a href="#services" className="text-gray-700 hover:text-primary-600 transition">Services</a>
                            <a href="#about" className="text-gray-700 hover:text-primary-600 transition">About</a>
                            <a href="#testimonials" className="text-gray-700 hover:text-primary-600 transition">Testimonials</a>
                            <a href="#contact" className="text-gray-700 hover:text-primary-600 transition">Contact</a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a href="#home" className="block px-3 py-2 text-gray-700 hover:bg-primary-50 rounded-md">Home</a>
                            <a href="#services" className="block px-3 py-2 text-gray-700 hover:bg-primary-50 rounded-md">Services</a>
                            <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-primary-50 rounded-md">About</a>
                            <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:bg-primary-50 rounded-md">Testimonials</a>
                            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:bg-primary-50 rounded-md">Contact</a>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-pink-50 to-purple-50 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        {/* Decorative sparkles */}
                        <div className="flex justify-center mb-6">
                            <Sparkles className="h-12 w-12 text-primary-400 animate-pulse" />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 relative">
                            Make Every Moment
                            <span className="block bg-gradient-to-r from-primary-600 to-pink-600 bg-clip-text text-transparent">
                                Unforgettable
                            </span>
                            {/* Decorative underline */}
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary-400 to-pink-400 rounded-full"></div>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Professional event design and planning services for weddings, birthdays, and celebrations.
                            We bring your vision to life with creativity, elegance, and attention to detail.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition shadow-lg hover:shadow-xl"
                            >
                                Get Started
                                <ChevronRight className="ml-2 h-5 w-5" />
                            </a>
                            <a
                                href="#services"
                                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 rounded-lg hover:bg-gray-50 transition border-2 border-primary-600"
                            >
                                View Services
                            </a>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center transform hover:scale-110 transition-all duration-300 group">
                                <div className="relative inline-block mb-3">
                                    <div className="absolute inset-0 bg-primary-400 rounded-lg blur opacity-25 group-hover:opacity-50 transition-opacity"></div>
                                    <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-pink-100 rounded-lg hover:from-primary-200 hover:to-pink-200 transition-all shadow-lg">
                                        <stat.icon className="h-7 w-7 text-primary-600" />
                                    </div>
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                                <div className="mt-2 w-12 h-0.5 bg-gradient-to-r from-transparent via-primary-300 to-transparent mx-auto"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
                {/* Decorative corner elements */}
                <div className="absolute top-10 right-10 w-20 h-20 border-t-4 border-r-4 border-primary-200 opacity-50"></div>
                <div className="absolute bottom-10 left-10 w-20 h-20 border-b-4 border-l-4 border-pink-200 opacity-50"></div>
                
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 relative">
                        <div className="inline-block relative">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
                            <div className="absolute -top-4 -right-4">
                                <Sparkles className="h-6 w-6 text-primary-400 animate-pulse" />
                            </div>
                        </div>
                        <p className="text-xl text-gray-600">Creating unforgettable moments through stunning event designs</p>
                        <div className="mt-4 w-24 h-1 bg-gradient-to-r from-primary-400 via-pink-400 to-purple-400 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105">
                            {/* Decorative badge */}
                            <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Heart className="h-5 w-5 text-primary-600" />
                            </div>
                            <div className="aspect-[3/4] relative bg-gray-200">
                                <img
                                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80"
                                    alt="Elegant Wedding Ceremony"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-8 h-0.5 bg-primary-400"></div>
                                        <Sparkles className="h-4 w-4" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Elegant Weddings</h3>
                                    <p className="text-sm text-gray-200">Luxurious ceremony designs</p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105">
                            <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Calendar className="h-5 w-5 text-primary-600" />
                            </div>
                            <div className="aspect-[3/4] relative bg-gray-200">
                                <img
                                    src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80"
                                    alt="Reception Table Setting"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-8 h-0.5 bg-pink-400"></div>
                                        <Sparkles className="h-4 w-4" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Reception Details</h3>
                                    <p className="text-sm text-gray-200">Beautiful table settings</p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105">
                            <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Users className="h-5 w-5 text-primary-600" />
                            </div>
                            <div className="aspect-[3/4] relative bg-gray-200">
                                <img
                                    src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80"
                                    alt="Outdoor Wedding Celebration"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-8 h-0.5 bg-purple-400"></div>
                                        <Sparkles className="h-4 w-4" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Outdoor Celebrations</h3>
                                    <p className="text-sm text-gray-200">Breathtaking venue setups</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
                <div className="absolute top-1/4 right-0 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-block relative mb-4">
                            <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
                            <div className="absolute -top-3 -left-3">
                                <div className="w-3 h-3 bg-primary-400 rounded-full animate-ping"></div>
                            </div>
                        </div>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            From intimate gatherings to grand celebrations, we offer comprehensive event design services
                        </p>
                        <div className="mt-4 w-24 h-1 bg-gradient-to-r from-primary-400 via-pink-400 to-purple-400 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-primary-100 hover:border-primary-300 transform hover:-translate-y-2 overflow-hidden"
                            >
                                {/* Decorative corner accent */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-100 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                
                                {/* Icon with glow effect */}
                                <div className="relative inline-block mb-4">
                                    <div className="absolute inset-0 bg-primary-500 rounded-xl blur-md opacity-30 group-hover:opacity-60 transition-opacity"></div>
                                    <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                                        <service.icon className="h-8 w-8 text-white" />
                                    </div>
                                </div>
                                
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors flex items-center gap-2">
                                    {service.title}
                                    <Sparkles className="h-5 w-5 text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                                
                                {/* Divider */}
                                <div className="w-12 h-0.5 bg-gradient-to-r from-primary-400 to-transparent mb-4"></div>
                                
                                <ul className="space-y-3">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 group-hover:bg-primary-200 transition-colors">
                                                <ChevronRight className="h-4 w-4 text-primary-600 group-hover:translate-x-0.5 transition-transform" />
                                            </div>
                                            <span className="font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                
                                {/* Bottom accent line */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-pink-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                With over a decade of experience in event design and planning, we've mastered the art of
                                creating memorable celebrations that reflect your unique style and vision.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                                        <Sparkles className="h-5 w-5 text-primary-600" />
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold text-gray-900">Creative Excellence</h4>
                                        <p className="text-gray-600">Innovative designs that bring your vision to life</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                                        <Award className="h-5 w-5 text-primary-600" />
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold text-gray-900">Award-Winning Team</h4>
                                        <p className="text-gray-600">Recognized professionals with proven expertise</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                                        <Heart className="h-5 w-5 text-primary-600" />
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold text-gray-900">Personalized Service</h4>
                                        <p className="text-gray-600">Every event is tailored to your unique needs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square bg-gradient-to-br from-primary-200 to-pink-200 rounded-2xl"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-xl">
                                    <Sparkles className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                                    <p className="text-2xl font-bold text-gray-900">Creating Magic</p>
                                    <p className="text-gray-600">One Event at a Time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
                        <p className="text-xl text-gray-600">Don't just take our word for it</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 shadow-lg">
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                                <div className="border-t pt-4">
                                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                    <p className="text-sm text-gray-600">{testimonial.event}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 to-pink-600">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">Let's Create Something Amazing</h2>
                        <p className="text-xl text-white/90">Get in touch to start planning your perfect event</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl p-8 shadow-xl">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
                                    <select
                                        name="eventType"
                                        value={formData.eventType}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                                    >
                                        <option>Wedding</option>
                                        <option>Birthday Party</option>
                                        <option>Corporate Event</option>
                                        <option>Other Celebration</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        rows="4"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                                        placeholder="Tell us about your event..."
                                    ></textarea>
                                </div>

                                {formStatus === 'success' && (
                                    <div className="bg-green-50 text-green-800 px-4 py-3 rounded-lg">
                                        ✓ Message sent successfully! We'll get back to you soon.
                                    </div>
                                )}

                                {formStatus === 'error' && (
                                    <div className="bg-red-50 text-red-800 px-4 py-3 rounded-lg">
                                        ✗ Failed to send message. Please try again or email us directly.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={formStatus === 'sending'}
                                    className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="text-white space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <Phone className="h-6 w-6 mr-4" />
                                        <span className="text-lg">+1 (555) 123-4567</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Mail className="h-6 w-6 mr-4" />
                                        <span className="text-lg">hello@elegantevents.com</span>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="h-6 w-6 mr-4" />
                                        <span className="text-lg">123 Event Street, City, ST 12345</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition">
                                        <Instagram className="h-6 w-6" />
                                    </a>
                                    <a href="#" className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition">
                                        <Facebook className="h-6 w-6" />
                                    </a>
                                    <a href="#" className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition">
                                        <Twitter className="h-6 w-6" />
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                <h4 className="text-xl font-semibold mb-2">Office Hours</h4>
                                <p className="text-white/90">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p className="text-white/90">Saturday: 10:00 AM - 4:00 PM</p>
                                <p className="text-white/90">Sunday: By Appointment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="flex items-center justify-center mb-4">
                        <Sparkles className="h-6 w-6 text-primary-400" />
                        <span className="ml-2 text-xl font-bold">Elegant Events</span>
                    </div>
                    <p className="text-gray-400">
                        © 2025 Elegant Events. All rights reserved. Making moments memorable.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default App
