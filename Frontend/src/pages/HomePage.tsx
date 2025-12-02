import { useEffect, useState } from 'react';
import { blockService } from '@/services/blockService';
import { Block } from '@/types';
import BlockCard from '@/components/BlockCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Search, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    fetchBlocks();
  }, [debouncedSearch]);

  const fetchBlocks = async () => {
    try {
      setLoading(true);
      const response = await blockService.getAllBlocks({
        status: 'ALL', // Show all statuses to notify users about development progress
        search: debouncedSearch || undefined,
        page: 1,
        pageSize: 100 // Load all for homepage
      });
      setBlocks(response.data || []);
    } catch (error) {
      console.error('Error fetching blocks:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white border-b">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 -z-10" />
          
          <div className="container mx-auto px-4 py-16 md:py-32">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Sparkles className="w-4 h-4" />
                <span>Discover the best developer tools</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
                Build better software <br />
                <span className="text-primary">with the right tools</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
                A curated collection of high-quality code snippets, libraries, and resources to help you build modern applications faster.
              </p>
              
              <div className="relative max-w-xl mx-auto animate-in fade-in slide-in-from-bottom-7 duration-700 delay-500">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                  <div className="relative flex items-center">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <Input
                      type="search"
                      placeholder="Search for tools, libraries, snippets..."
                      className="pl-12 h-12 md:h-14 text-base md:text-lg shadow-sm border-muted bg-white/80 backdrop-blur-sm focus:bg-white transition-all"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blocks Grid */}
        <section className="container mx-auto px-4 py-20">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Featured Tools</h2>
            <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-primary">
              View All <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-[300px] rounded-xl bg-slate-100 animate-pulse" />
              ))}
            </div>
          ) : blocks.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No tools found</h3>
              <p className="text-muted-foreground max-w-sm mx-auto">
                We couldn't find any tools matching your search. Try different keywords or browse all tools.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blocks.map((block, index) => (
                <div 
                  key={block.id} 
                  className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <BlockCard block={block} />
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
