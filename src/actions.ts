"use server";

import { revalidatePath } from "next/cache";

import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth/nextAuthOptions";
import prisma from "./lib/db";

export async function addToWatchList(formData: FormData) {
  "use server";

  const movieId = formData.get("movieId");
  const pathname = formData.get("pathname") as string;
  const session = await getServerSession(authOptions);

  const data = await prisma.watchList.create({
    data: {
      userId: session?.user?.email as string,
      movieId: Number(movieId),
    },
  });

  revalidatePath(pathname);
}

export async function deleteFromWatchList(formData: FormData) {
  "use server";

  const watchListId = formData.get("watchListId") as string;
  const pathname = formData.get("pathname") as string;

  const data = await prisma.watchList.delete({
    where: {
      id: watchListId,
    },
  });

  revalidatePath(pathname);
}
