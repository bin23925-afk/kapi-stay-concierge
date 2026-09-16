'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Copy, Check, MapPin } from 'lucide-react';

interface KeyCardProps {
    roomName: string;
    address: string;
    passcode: string;
}

export default function KeyCard({ roomName, address, passcode }: KeyCardProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(passcode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-4">
            <div>
                <h2 className="text-xl font-bold text-gray-800">{roomName}</h2>
                <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
                    {address}
                </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border border-dashed border-gray-200 text-center space-y-1">
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Mã khóa cửa số</span>
                <div className="text-3xl font-mono font-bold tracking-widest text-primary-600">
                    {passcode || '------'}
                </div>
                <Button
                    variant="outline"
                    size="sm"
                    className="mt-2 text-xs gap-1.5"
                    onClick={handleCopy}
                >
                    {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? 'Đã sao chép' : 'Sao chép mã cửa'}
                </Button>
            </div>
        </div>
    );
}