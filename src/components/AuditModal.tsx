import React from 'react';
import { HeroAuditFormCard } from './HeroAuditFormCard';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="max-w-lg w-full relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <HeroAuditFormCard isModal={true} onCloseModal={onClose} />
      </div>
    </div>
  );
};
