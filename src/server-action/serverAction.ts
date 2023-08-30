'use server'
import { revalidatePath, revalidateTag } from "next/cache";

export interface GuestModel {
  id: string;
  name: string;
}

const guests: GuestModel[] = [{ id: "1", name: "Vasia" }];

export async function getAllGuests() {
  return  Promise.resolve(guests)
}

export async function handleSubmit(form: FormData) {

  const user = form.get('user')?.toString();
  if (!user) return;
  const id = crypto.randomUUID()

  guests.push({name: user, id })

  revalidateTag('guest')
}

export async function handleRemoveGuest(targetId: string) {

  const currentTargetId = guests.findIndex(guest => guest.id === targetId)
 guests.splice(currentTargetId, 1)

  revalidatePath('/blog')
}

export async function getAllPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      tags: ['posts'],
    }
  });
  return await response.json()
}
