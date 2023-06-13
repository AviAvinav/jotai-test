import { atom } from "jotai";

const mockAtom = atom([]);

export const CartAtom = atom(
  (get) => get(mockAtom),
  (get, set, newItem) => {
    set(CartAtom, [...get(CartAtom), newItem]);
  }
);
