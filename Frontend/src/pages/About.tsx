const About = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">About Chunkoverflow</h1>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-xl mb-6">
                Welcome to Chunkoverflow - your ultimate solutions platform where innovation meets simplicity.
              </p>
              
              <p className="mb-6">
                We believe that powerful tools should be accessible to everyone. That's why we've created a comprehensive 
                platform that brings together the best collection of tools designed to enhance your productivity and 
                streamline your workflow.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Our Mission</h2>
              <p className="mb-6">
                To provide fast, secure, and customizable tools that empower individuals and teams to achieve more. 
                We're committed to delivering solutions that are not just functional, but also intuitive and enjoyable to use.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Why Choose Us?</h2>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li><strong>Lightning Fast:</strong> Our tools are optimized for speed and performance</li>
                <li><strong>Secure by Design:</strong> Your data privacy and security are our top priorities</li>
                <li><strong>Highly Customizable:</strong> Adapt our tools to fit your specific needs</li>
                <li><strong>Always Evolving:</strong> We continuously improve and add new features</li>
              </ul>
              
              <p className="mb-6">
                Whether you're a developer, designer, content creator, or business professional, Chunkoverflow has 
                the tools you need to work smarter, not harder.
              </p>
              
              <div className="bg-primary-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Get Started Today</h3>
                <p className="text-gray-600">
                  Ready to boost your productivity? Explore our collection of tools and discover how Chunkoverflow 
                  can transform your workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
