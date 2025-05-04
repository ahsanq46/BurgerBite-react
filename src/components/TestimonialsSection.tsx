import { testimonials } from '../data/testimonialData';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-neutral">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it, see what our happy customers have to say about our food and service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < testimonial.rating ? 'text-secondary fill-secondary' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-primary-light p-8 rounded-xl inline-block">
            <h3 className="text-2xl font-bold text-primary mb-2">Join The Thousands of Happy Customers</h3>
            <p className="text-gray-700 mb-4">Visit us today and experience the BurgerBite difference!</p>
            <a href="#menu" className="btn btn-primary">Order Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;