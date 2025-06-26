import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { getBooks } from '../services/bookService';
import { getMembers } from '../services/memberService';
import { getStaff } from '../services/staffService';

const Dashboard = () => {
  const [counts, setCounts] = useState({
    books: 0,
    members: 0,
    staff: 0
  });

  useEffect(() => {
    // fetch all three in parallel
    Promise.all([
      getBooks().then(res => res.data.length),
      getMembers().then(res => res.data.length),
      getStaff().then(res => res.data.length)
    ])
    .then(([booksCount, membersCount, staffCount]) => {
      setCounts({ books: booksCount, members: membersCount, staff: staffCount });
    })
    .catch(err => console.error(err));
  }, []);

  return (
    <div className="grid p-fluid gap-4">
      <div className="col-12 md:col-4">
        <Card title="Books" subTitle={`${counts.books} total`} className="text-center" />
      </div>
      <div className="col-12 md:col-4">
        <Card title="Members" subTitle={`${counts.members} total`} className="text-center" />
      </div>
      <div className="col-12 md:col-4">
        <Card title="Staff" subTitle={`${counts.staff} total`} className="text-center" />
      </div>
    </div>
  );
};

export default Dashboard;
