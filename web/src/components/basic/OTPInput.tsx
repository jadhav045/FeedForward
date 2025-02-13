import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Button } from './Button';

interface OTPInputProps {
  type: 'email' | 'mobile';
  isVerified: boolean;
  onVerificationSuccess: () => void;
  showInput: boolean;
  onSendOTP: () => void;
}

export const OTPInput = ({ 
  type, 
  isVerified, 
  onVerificationSuccess, 
  showInput, 
  onSendOTP 
}: OTPInputProps) => {
  const [otp, setOTP] = useState('');

  if (isVerified) {
    return <span className="text-green-600">{type} Verified ✓</span>;
  }

  return (
    <div className="space-y-2">
      <Button
        variant="outline"
        onClick={onSendOTP}
      >
        Send {type} OTP
      </Button>
      
      {showInput && (
        <div className="flex gap-2">
          <input
            type="text"
            placeholder={`Enter ${type} OTP`}
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            className="p-2 border rounded-md"
          />
          <Button
            variant="secondary"
            onClick={() => {
              if (otp === '1234') {
                onVerificationSuccess();
                toast.success(`${type} verified successfully!`);
              } else {
                toast.error('Invalid OTP');
              }
            }}
          >
            Verify
          </Button>
        </div>
      )}
    </div>
  );
};