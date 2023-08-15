"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface Props {
  key: string;
  id: string;
  name: string;
  username: string;
  image: string;
  personType: string;
  hasBorders?: boolean;
}

const UserCard = ({
  key,
  id,
  name,
  username,
  image,
  personType,
  hasBorders,
}: Props) => {
  const router = useRouter();

  return (
    <article
      className={`user-card ${
        hasBorders && "  px-4 py-5 border rounded-lg  border-gray-800"
      }`}
    >
      <div className="user-card_avatar">
        <Image
          src={image}
          alt="logo"
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className="flex-1 text-ellipsis">
          <h4 className="text-base-semibold text-light-1">{name}</h4>
          <p className="text-small-medium text-gray-1">@{username}</p>
        </div>
      </div>
      <Button
        className="btn-outlined-primary"
        size={"sm"}
        onClick={() => router.push(`/profile/${id}`)}
      >
        View
      </Button>
    </article>
  );
};

export default UserCard;
