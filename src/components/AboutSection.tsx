import { Target, Award, Clock, Utensils } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2012, BurgerBite started as a small food truck with a passion for creating the perfect burger. We've grown from that humble beginning into multiple locations, but our commitment to quality ingredients and amazing flavors remains unchanged.
            </p>
            <p className="text-gray-600 mb-8">
              Every day, we hand-select the freshest ingredients, craft our signature sauces from scratch, and grill each burger to perfection. We believe that fast food doesn't have to compromise on quality or taste.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-3">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold">Our Mission</h3>
                <p className="text-sm text-gray-600">To serve delicious, quality food with speed and a smile.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-3">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold">Quality First</h3>
                <p className="text-sm text-gray-600">We never compromise on ingredients or preparation.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Restaurant interior" 
                className="rounded-lg shadow-lg object-cover h-48 w-full"
              />
              <img 
                src="https://images.pexels.com/photos/6287495/pexels-photo-6287495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Chef preparing food" 
                className="rounded-lg shadow-lg object-cover h-64 w-full"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img 
                src="https://images.pexels.com/photos/13998886/pexels-photo-13998886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Fresh ingredients" 
                className="rounded-lg shadow-lg object-cover h-64 w-full"
              />
              <img 
                src="https://images.pexels.com/photos/11311684/pexels-photo-11311684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team members" 
                className="rounded-lg shadow-lg object-cover h-48 w-full"
              />
            </div>
          </div>
        </div>

        {/* Feature Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="bg-neutral rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Fast Service</h3>
            <p className="text-gray-600">Your order ready in under 10 minutes, guaranteed.</p>
          </div>
          
          <div className="bg-neutral rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 bg-secondary text-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Utensils className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Fresh Ingredients</h3>
            <p className="text-gray-600">Locally sourced produce and premium meats.</p>
          </div>
          
          <div className="bg-neutral rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <path d="M14 2v6h6"></path>
                <path d="m9 14 2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Online Ordering</h3>
            <p className="text-gray-600">Easy mobile ordering for pickup or delivery.</p>
          </div>
          
          <div className="bg-neutral rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 bg-secondary text-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                <path d="M19 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3"></path>
                <path d="M1 7h22v4H1z"></path>
                <path d="M5 11v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7"></path>
                <path d="M12 15v-3"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Catering</h3>
            <p className="text-gray-600">Special packages for events of any size.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;