import ReactModal from "react-modal";
import { CurrencyCard } from "../CurrencyCard";
import { currencies } from "@/utils/currency";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  selectedCurrency: string; 
  onSelect: (code: string) => void; 
}

export function CurrencyModal({
  isOpen,
  onClose,
  title,
  selectedCurrency, 
  onSelect, 
}: ModalProps) {
  const activeCurrency =
    currencies.find((c) => c.code === selectedCurrency) || currencies[0];
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto"
      overlayClassName="fixed inset-0 z-40 bg-gray-500 bg-opacity-75 transition-opacity"
      contentLabel={title}
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-2xl sm:w-full">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <h3
            className="text-lg leading-6 font-medium text-gray-900"
            id="modal-title"
          >
            {title}
          </h3>
          <div className="mt-2">
            <CurrencyCard
              name={activeCurrency.name}
              code={activeCurrency.code}
              symbol={activeCurrency.symbol}
              active={true}
              onSelect={() => {}}
            />

            <div className="border-t-2 my-4"></div>
            <div className="my-4 max-h-[60vh] overflow-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 grid-flow-row gap-4">
              {currencies
                .filter((c) => c.code !== selectedCurrency)
                .map((currency) => (
                  <CurrencyCard
                    key={currency.code}
                    name={currency.name}
                    code={currency.code}
                    symbol={currency.symbol}
                    active={false}
                    onSelect={() => onSelect(currency.code)}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </ReactModal>
  );
}
