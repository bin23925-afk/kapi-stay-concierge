'use client';

import { useState, use } from 'react';
import KeyCard from '@/components/ui/stay/KeyCard';
import WifiWidget from '@/components/ui/stay/WifiWidget';
import QuickActions from '@/components/ui/stay/QuickActions';

export default function StayHubPage({ params }: { params: Promise<{ bookingId: string }> }) {
    const { bookingId } = use(params);
    const [roomData] = useState<any>(null);

    const handleCheckout = async () => {
        const confirm = window.confirm('Bạn có chắc chắn muốn trả phòng và rời đi?');
        if (confirm) {
            alert('Đã xác nhận trả phòng thành công!');
        }
    };

    return (
        <main className="max-w-md mx-auto min-h-screen bg-gray-50 p-4 space-y-4 pb-20">
            <header className="py-2">
                <span className="text-xs font-semibold px-2.5 py-1 bg-green-100 text-green-700 rounded-full">
                    Đang trong thời gian lưu trú
                </span>
                <h1 className="text-2xl font-bold text-gray-900 mt-2">Kapi Concierge</h1>
                <p className="text-xs text-gray-500">Mã đặt phòng: #{bookingId}</p>
            </header>

            <KeyCard
                roomName={roomData?.name || 'Phòng Studio Ban Công'}
                address={roomData?.address || '123 Nguyễn Trãi, Thanh Xuân, Hà Nội'}
                passcode={roomData?.passcode || '888999'}
            />

            <WifiWidget
                ssid={roomData?.wifi_ssid || 'Kapi_House_5G'}
                pass={roomData?.wifi_pass || 'kapi2026@stay'}
            />

            <QuickActions
                mapUrl="https://maps.google.com"
                onCheckout={handleCheckout}
            />
        </main>
    );
}