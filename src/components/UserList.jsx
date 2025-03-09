import React, { useMemo } from 'react';
import { FixedSizeList } from 'react-window';
import { faker } from '@faker-js/faker';
import { motion } from 'framer-motion';

const generateUsers = (count) => {
  return Array.from({ length: count }, (_, index) => ({
    id: index,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    company: faker.company.name(),
    role: faker.person.jobTitle(),
  }));
};

const User = React.memo(({ data, index, style }) => {
  const user = data[index];
  
  return (
    <div style={style}>
      <motion.div 
        className="m-2 bg-white rounded-xl shadow-lg transform perspective-1000 hover:scale-105 transition-all duration-300 ease-out hover:shadow-xl"
        whileHover={{ 
          rotateX: 5,
          rotateY: 5,
          z: 50
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="p-6 flex items-center space-x-4">
          <div className="relative">
            <motion.img
              src={user.avatar}
              alt={user.name}
              className="w-16 h-16 rounded-full ring-4 ring-purple-100"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-400 rounded-full border-2 border-white"></div>
          </div>
          
          <div className="flex-1">
            <motion.h2 
              className="text-xl font-bold text-gray-900 hover:text-purple-600 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              {user.name}
            </motion.h2>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
          
          <div className="text-right">
            <div className="text-sm font-semibold text-purple-600">{user.company}</div>
            <div className="text-xs text-gray-500 mt-1">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800">
                {user.role}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
});

User.displayName = 'User';

const UserList = () => {
  const users = useMemo(() => generateUsers(10000), []);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div 
        className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="px-8 py-6 border-b border-purple-100">
          <motion.h2 
            className="text-3xl font-bold text-purple-900"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Users List
          </motion.h2>
          <motion.p 
            className="text-sm text-purple-600 mt-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            Displaying 10,000 users with virtualized rendering
          </motion.p>
        </div>
        
        <FixedSizeList
          height={600}
          width="100%"
          itemCount={users.length}
          itemSize={100}
          itemData={users}
          className="custom-scrollbar"
        >
          {User}
        </FixedSizeList>
      </motion.div>
    </div>
  );
};

export default UserList;