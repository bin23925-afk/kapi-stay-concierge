'use client';

import { Button } from '@/components/ui/Button';
import { Navigation, LogOut } from 'lucide-react';

interface QuickActionsProps {
    mapUrl?: string;
    onCheckout: () => void;
    isCheckingOut?: boolean;
}

export default function QuickActions({ mapUrl, onCheckout, isCheckingOut }: QuickActionsProps) {
    const handleOpenMap = () => {
        window.open(mapUrl || 'https://maps.google.com', '_blank');
    };

    return (
        <div className="grid grid-cols-2 gap-3">
            <Button
                variant="outline"
                onClick={handleOpenMap}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm"
            >
                <Navigation className="w-4 h-4 text-blue-600" />
                Chỉ đường Maps
            </Button>

            <Button
                variant="outline"
                onClick={onCheckout}
                disabled={isCheckingOut}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm text-red-600 border-red-200 hover:bg-red-50"
            >
                <LogOut className="w-4 h-4" />
                {isCheckingOut ? 'Đang xử lý...' : 'Trả phòng nhanh'}
            </Button>
        </div>
    );
}