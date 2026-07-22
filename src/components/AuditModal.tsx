import React from 'react';
import { HeroAuditFormCard } from './HeroAuditFormCard';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="max-w-lg w-full relative">
        <HeroAuditFormCard isModal={true} onCloseModal={onClose} />
      </div>
    </div>
  );
};
