import * as React from "react";
import Link from "next/link";
import { DoorOpen, Wifi, Wind, Coffee, ArrowLeft } from "lucide-react";
import { Badge, Button } from "@/components/ui";

const sampleRooms = [
  {
    id: "deluxe-terrace",
    name: "Phòng Deluxe Ban Công Hoa Nắng",
    type: "Studio 1 Giường Đôi",
    price: "650.000đ",
    unit: "/ đêm",
    status: "Còn phòng",
    statusVariant: "success" as const,
    amenities: ["Wifi tốc độ cao", "Điều hòa 2 chiều", "Tự check-in khóa số", "Ban công thoáng mát"],
  },
  {
    id: "cozy-nest",
    name: "Phòng Cozy Nest Ấm Cúng",
    type: "Phòng Tiêu Chuẩn 1 Giường Lớn",
    price: "480.000đ",
    unit: "/ đêm",
    status: "Còn phòng",
    statusVariant: "success" as const,
    amenities: ["Khóa thông minh", "Nước nóng 24/7", "Máy chiếu phim", "Bàn làm việc"],
  },
  {
    id: "family-suite",
    name: "Phòng Family Suite Gia Đình",
    type: "Căn Hộ 2 Phòng Ngủ",
    price: "1.150.000đ",
    unit: "/ đêm",
    status: "Đang có khách",
    statusVariant: "warning" as const,
    amenities: ["Bếp nấu đầy đủ", "Tủ lạnh lớn", "Máy giặt sấy", "Smart TV 55 inch"],
  },
];

export default function RoomsPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-dark/60 hover:text-primary mb-2 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Quay lại trang chủ</span>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-dark tracking-tight">
            Danh sách phòng tại Kapi House
          </h1>
          <p className="text-sm text-dark/60 mt-1">
            Tất cả các phòng đều được trang bị hệ thống tự check-in 24/7 bằng mã số riêng biệt.
          </p>
        </div>
      </div>

      {/* Room Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleRooms.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-2xl border border-dark/10 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
          >
            {/* Room Image Placeholder with warm palette */}
            <div className="h-48 bg-light/70 border-b border-dark/10 flex items-center justify-center relative p-4">
              <DoorOpen className="w-12 h-12 text-primary/40" />
              <div className="absolute top-3 right-3">
                <Badge variant={room.statusVariant} size="sm" dot>
                  {room.status}
                </Badge>
              </div>
            </div>

            <div className="p-5 sm:p-6 flex flex-col flex-1">
              <span className="text-xs font-medium text-primary uppercase tracking-wider mb-1">
                {room.type}
              </span>
              <h2 className="text-lg font-bold text-dark mb-2">
                {room.name}
              </h2>

              <ul className="space-y-1.5 mb-6 text-xs text-dark/70 flex-1">
                {room.amenities.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-dark/10 flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-primary">
                    {room.price}
                  </span>
                  <span className="text-xs text-dark/60"> {room.unit}</span>
                </div>
                <Button size="sm">Chọn phòng</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
