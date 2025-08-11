import { useBlocks } from '../hooks/useBlocks';
import BlockCard from '../components/BlockCard';
import { Zap, Shield, Settings } from 'lucide-react';

const Home = () => {
  const { blocks, loading, error } = useBlocks();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-400"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Error Loading Tools</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-primary-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Discover Our{' '}
              <span className="bg-gradient-to-r from-primary-400 to-primary-600 text-transparent bg-clip-text">
                Tools
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Everything you need in one place. Simple, efficient, and powerful tools to enhance your productivity.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-primary-400 text-white px-8 py-3 rounded-lg hover:bg-primary-500 transition-all transform hover:-translate-y-1 font-medium">
                Get Started
              </button>
              <button className="bg-white text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 font-medium border border-gray-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {blocks && blocks.length > 0 ? (
              blocks.map((block, index) => (
                <BlockCard key={block.id} block={block} index={index} />
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <p className="text-gray-600">No tools available at the moment.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Chunkoverflow?</h2>
            <p className="text-gray-600">Experience the best collection of tools designed to make your work easier and more efficient.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-primary-400 mb-4">
                <Zap className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast & Efficient</h3>
              <p className="text-gray-600">Lightning-fast processing for all your tools.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-primary-400 mb-4">
                <Shield className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure</h3>
              <p className="text-gray-600">Your data is always safe with us.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-primary-400 mb-4">
                <Settings className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customizable</h3>
              <p className="text-gray-600">Adjust settings to match your needs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
