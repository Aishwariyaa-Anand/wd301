/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMembersState } from "../../context/members/context";
import { useMembersDispatch } from '../../context/members/context';
import { deleteMember } from "../../context/members/actions";

export default function MemberListItems() {
  const { members, isLoading, isError, errorMessage } = useMembersState();

  const dispatchMembers = useMembersDispatch()
  const handleDeleteMember = async (id: number) => {
    try {
      // Call deleteMember function to delete the member with the given id
      const response = await deleteMember(dispatchMembers, id);
      if (response.ok) {
        console.log('Member deleted successfully');
      }
    } catch (error) {
      console.error('An error occurred while deleting member:', error);
    }
  };

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
          
          <button onClick={() => handleDeleteMember(member.id)} className="mt-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">Delete</button>
        </div>
      ))}
    </>
  );
}
