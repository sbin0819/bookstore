'use client';

import clsx from 'clsx';
import { useState } from 'react';

type TabState = 'accommodation' | 'experience';

const Search = () => {
  const [tab, setTab] = useState<TabState>('accommodation');

  const handleTab = (tab: TabState) => {
    setTab(tab);
  };

  return (
    <div className="mt-4">
      <div className="flex items-center justify-center gap-10 text-lg">
        <div
          className={clsx(
            'cursor-pointer',
            tab === 'accommodation' && 'font-bold'
          )}
          onClick={() => handleTab('accommodation')}
        >
          숙소
        </div>
        <div
          className={clsx(
            'cursor-pointer',
            tab === 'experience' && 'font-bold'
          )}
          onClick={() => handleTab('experience')}
        >
          체험
        </div>
      </div>
      <div className="mt-8 h-20 rounded-full border border-slate-200 shadow-lg"></div>
    </div>
  );
};

export default Search;
