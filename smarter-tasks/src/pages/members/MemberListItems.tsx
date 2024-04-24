/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMembersState } from "../../context/members/context";

export default function MemberListItems() {
  const { members, isLoading, isError, errorMessage } = useMembersState();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  return (
    <>
      {members.map((member: any) => (
        <div key={member.id} className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">{member.name}</h5>
          <p className="text-gray-500 dark:text-gray-400">{member.email}</p>
        </div>
      ))}
    </>
  );
}
