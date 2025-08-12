
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ToolCard } from "@/components/examples/ToolCard";

export function HomePage() {
  return (
    <div className="flex flex-col gap-10 py-10">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-muted py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Công Cụ Trực Tuyến Miễn Phí
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
              Bộ sưu tập các công cụ trực tuyến giúp bạn làm việc hiệu quả hơn. Dễ sử dụng và hoàn toàn miễn phí.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/tools">Khám Phá Công Cụ</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Tìm Hiểu Thêm</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-tight">Công Cụ Nổi Bật</h2>
          <p className="text-muted-foreground">
            Các công cụ được sử dụng nhiều nhất trên ChunkOverflow
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {featuredTools.map((tool) => (
              <ToolCard
                key={tool.id}
                title={tool.title}
                description={tool.description}
                category={tool.category}
                imageSrc={tool.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container px-4 md:px-6 py-10 bg-muted/50">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-tight">Danh Mục Công Cụ</h2>
          <p className="text-muted-foreground">
            Khám phá các công cụ theo danh mục
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-6">
            {categories.map((category) => (
              <Card key={category.slug} className="overflow-hidden">
                <CardContent className="p-0">
                  <Link
                    to={`/tools/${category.slug}`}
                    className="flex flex-col items-center p-6 text-center hover:bg-accent/50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold">{category.name}</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      {category.description}
                    </p>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 md:px-6 py-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Bắt đầu sử dụng ChunkOverflow ngay hôm nay
          </h2>
          <p className="text-muted-foreground max-w-[700px]">
            Tạo tài khoản miễn phí để lưu trữ công cụ yêu thích và truy cập nhanh chóng
          </p>
          <Button asChild size="lg" className="mt-4">
            <Link to="/register">Đăng Ký Miễn Phí</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

const categories = [
  {
    name: "Công Cụ Văn Bản",
    slug: "text-tools",
    description: "Chỉnh sửa, định dạng và chuyển đổi văn bản",
  },
  {
    name: "Công Cụ Hình Ảnh",
    slug: "image-tools",
    description: "Chỉnh sửa, tối ưu và chuyển đổi hình ảnh",
  },
  {
    name: "Công Cụ Dữ Liệu",
    slug: "data-tools",
    description: "Chuyển đổi, xác thực và phân tích dữ liệu",
  },
  {
    name: "Công Cụ Phát Triển",
    slug: "dev-tools",
    description: "Công cụ cho lập trình viên",
  },
];

const featuredTools = [
  {
    id: 1,
    title: "Bộ Chuyển Đổi JSON",
    description: "Chuyển đổi JSON sang CSV, XML và nhiều định dạng khác",
    category: "Dữ Liệu",
    imageSrc: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Trình Soạn Thảo Markdown",
    description: "Soạn thảo và xem trước Markdown trực tuyến",
    category: "Văn Bản",
    imageSrc: "https://images.unsplash.com/photo-1524668951403-d44b28200ce0?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Nén Hình Ảnh",
    description: "Giảm kích thước hình ảnh mà không giảm chất lượng",
    category: "Hình Ảnh",
    imageSrc: "https://images.unsplash.com/photo-1567722681579-c671cabd2810?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Tạo Mã QR",
    description: "Tạo mã QR cho URL, văn bản hoặc thông tin liên hệ",
    category: "Tiện ích",
    imageSrc: "https://images.unsplash.com/photo-1596742578443-7682ef5251cd?q=80&w=500&auto=format&fit=crop"
  },
];
