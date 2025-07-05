import { useState } from 'react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechFlow Inc.",
      rating: 5,
      quote:
        "This product has completely transformed how we approach our daily workflows. The intuitive design and powerful features have saved us countless hours every week.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Freelance Designer",
      rating: 5,
      quote:
        "I've tried many similar tools, but nothing comes close to this level of quality and ease of use. It's become an essential part of my creative process.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Small Business Owner",
      rating: 4,
      quote:
        "The customer support is exceptional, and the product delivers exactly what it promises. It's helped streamline our operations significantly.",
    },
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what real customers have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg border-0"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">{renderStars(testimonial.rating)}</div>

                <blockquote className="text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>

                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                    {testimonial.company && (
                      <>
                        {" at "}
                        <span className="font-medium">{testimonial.company}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
            <div className="flex">{renderStars(5)}</div>
            <span>Trusted by 10,000+ customers worldwide</span>
          </div>
        </div>
      </div>
    </section>
  )
}