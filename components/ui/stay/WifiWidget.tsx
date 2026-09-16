'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Wifi, Copy, Check } from 'lucide-react';

interface WifiWidgetProps {
    ssid: string;
    pass: string;
}

export default function WifiWidget({ ssid, pass }: WifiWidgetProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(pass);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                    <Wifi className="w-6 h-6" />
                </div>
                <div>
                    <h4 className="font-semibold text-gray-800 text-sm">{ssid || 'Kapi House Wi-Fi'}</h4>
                    <p className="text-xs text-gray-500">Mật khẩu: <span className="font-mono font-medium text-gray-700">{pass}</span></p>
                </div>
            </div>
            <Button variant="outline" size="sm" onClick={handleCopy} className="text-xs gap-1">
                {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Đã chép' : 'Sao chép'}
            </Button>
        </div>
    );
}