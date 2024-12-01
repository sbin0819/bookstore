'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { DialogClose } from '@radix-ui/react-dialog';
import clsx from 'clsx';
import { X } from 'lucide-react';
import { useState } from 'react';
import { GrLanguage } from 'react-icons/gr';

type TabState = 'locale' | 'currency';

const LocaleDialog = () => {
  const [tab, setTab] = useState<TabState>('locale');

  const handleTab = (tab: TabState) => {
    setTab(tab);
  };

  const handleResetTab = () => {
    setTab('locale');
  };

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) handleResetTab();
      }}
    >
      <DialogTrigger>
        <GrLanguage className="cursor-pointer" size={24} />
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] max-w-[800px] [&>button]:hidden">
        <DialogHeader>
          <div>
            <DialogClose className="cursor-pointer">
              <X className="h-4 w-4" />
            </DialogClose>
          </div>
          <div className="flex gap-8 border-b pt-4">
            <div
              className={clsx(
                'cursor-pointer py-2',
                tab === 'locale' && 'border-b-2 border-b-black font-semibold'
              )}
              onClick={() => handleTab('locale')}
            >
              언어와 지역
            </div>
            <div
              className={clsx(
                'cursor-pointer py-2',
                tab === 'currency' && 'border-b-2 border-b-black font-semibold'
              )}
              onClick={() => handleTab('currency')}
            >
              통화
            </div>
          </div>
        </DialogHeader>
        <div className="pt-8">
          {tab === 'locale' && <LocaleContent />}
          {tab === 'currency' && <CurrencyContent />}
        </div>
      </DialogContent>
    </Dialog>
  );
};

const localeData = [
  {
    lang: '한국어',
    country: '대한민국',
    code: 'ko',
  },
  {
    lang: 'English',
    country: 'United States',
    code: 'en',
  },
  {
    lang: '中文(简体)',
    country: '中国',
    code: 'zh',
  },
  {
    lang: '日本語',
    country: '日本',
    code: 'ja',
  },
  {
    lang: 'Français',
    country: 'France',
    code: 'fr',
  },
  {
    lang: 'Español',
    country: 'España',
    code: 'es',
  },
  {
    lang: 'Deutsch',
    country: 'Deutschland',
    code: 'de',
  },
  {
    lang: 'Italiano',
    country: 'Italia',
    code: 'it',
  },
  {
    lang: 'Português',
    country: 'Brasil',
    code: 'pt',
  },
  {
    lang: 'Русский',
    country: 'Россия',
    code: 'ru',
  },
];

const LocaleContent = () => {
  const [selectedLocale, setSelectedLocale] = useState<string | null>('ko');

  const handleSelectLocale = (code: string) => {
    setSelectedLocale(code);
  };

  return (
    <div>
      <DialogTitle>
        <div className="text-2xl">언어와 지역을 선택하세요.</div>
      </DialogTitle>
      <div className="mt-6 grid grid-cols-4 gap-4">
        {localeData.map((locale) => (
          <DialogClose key={locale.code} asChild>
            <Button
              variant="ghost"
              className={clsx(
                'flex flex-col items-start py-8',
                selectedLocale === locale.code && 'border border-black'
              )}
              onClick={() => handleSelectLocale(locale.code)}
            >
              <div>{locale.lang}</div>
              <div className="font-light">{locale.country}</div>
            </Button>
          </DialogClose>
        ))}
      </div>
    </div>
  );
};

const currencyData = [
  {
    currency: 'USD',
    symbol: '$',
  },
  {
    currency: 'KRW',
    symbol: '₩',
  },
  {
    currency: 'CNY',
    symbol: '¥',
  },
  {
    currency: 'JPY',
    symbol: '¥',
  },
  {
    currency: 'EUR',
    symbol: '€',
  },
  {
    currency: 'GBP',
    symbol: '£',
  },
  {
    currency: 'AUD',
    symbol: 'A$',
  },
  {
    currency: 'CAD',
    symbol: 'C$',
  },
  {
    currency: 'CHF',
    symbol: 'CHF',
  },
  {
    currency: 'SEK',
    symbol: 'kr',
  },
];

const CurrencyContent = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(
    'KRW'
  );

  const handleSelectCurrency = (currency: string) => {
    setSelectedCurrency(currency);
  };

  return (
    <div>
      <DialogTitle>
        <div className="text-2xl">통화를 선택하세요.</div>
      </DialogTitle>
      <div className="mt-6 grid grid-cols-4 gap-4">
        {currencyData.map((currency) => (
          <DialogClose key={currency.currency} asChild>
            <Button
              variant="ghost"
              className={clsx(
                'flex flex-col items-start py-8',
                selectedCurrency === currency.currency && 'border border-black'
              )}
              onClick={() => handleSelectCurrency(currency.currency)}
            >
              <div>{currency.currency}</div>
              <div className="font-light">{currency.symbol}</div>
            </Button>
          </DialogClose>
        ))}
      </div>
    </div>
  );
};

export default LocaleDialog;
