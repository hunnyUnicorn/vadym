import React from 'react';
import { CONTACTS } from '../../../constants/constants';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className='flex flex-col space-y-2 pt-6'>
      <div className='flex flex-col'>
        <span className='text-Snow text-xs font-bold'>Location</span>
        <span className='text-xs text-white'>{CONTACTS.LOCATION}</span>
      </div>
      <div className='flex flex-col'>
        <span className='text-Snow text-xs font-bold'>Email Address</span>

        <span className='text-xs text-white' mailto>
          <Link href={`mailto:${CONTACTS.EMAIL}`}>{CONTACTS.EMAIL}</Link>
        </span>
      </div>
      <div className='flex flex-col'>
        <span className='text-Snow text-xs font-bold'>Phone</span>
        <span className='text-xs text-white'>{CONTACTS.PHONE}</span>
      </div>
    </div>
  );
};

export default Contact;
