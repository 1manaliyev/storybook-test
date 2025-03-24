import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";

interface NotificationsStoreProviderProps {
  children: ReactNode;
}

export interface NotificationsStoreContextType {
  components: { id: number }[];
  counter: number;
  addComponent: () => void;
  removeComponent: (id: number) => void;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  status: "success" | "warning" | "attention";
  setStatus: Dispatch<SetStateAction<"success" | "warning" | "attention">>;
  showNotifiсation: (
    status: "success" | "warning" | "attention",
    title: string
  ) => void;
}

const NotificationsStoreContext = createContext<
  NotificationsStoreContextType | undefined
>(undefined);

export const NotificationsStoreProvider: React.FC<
  NotificationsStoreProviderProps
> = ({ children }) => {
  const [components, setComponents] = useState<{ id: number }[]>([]);
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState("success");
  const [status, setStatus] = useState<"success" | "warning" | "attention">(
    "warning"
  );

  const addComponent = useCallback(() => {
    setComponents((prev) => [...prev, { id: counter }]);
    setCounter((prev) => prev + 1);
  }, [counter]);

  const removeComponent = useCallback((id: number) => {
    setComponents((prev) => prev.filter((comp) => comp.id !== id));
  }, []);

  const showNotifiсation = useCallback(
    (newStatus: "success" | "warning" | "attention", newTitle: string) => {
      setStatus(newStatus);
      setTitle(newTitle);
      setComponents((prev) => [...prev, { id: counter }]);
      setCounter((prev) => prev + 1);
    },
    [counter]
  );

  const storeRef = useRef<NotificationsStoreContextType>({
    components,
    counter,
    addComponent,
    removeComponent,
    title,
    setTitle,
    status,
    setStatus,
    showNotifiсation,
  });

  storeRef.current = {
    components,
    counter,
    addComponent,
    removeComponent,
    title,
    setTitle,
    status,
    setStatus,
    showNotifiсation,
  };

  return (
    <NotificationsStoreContext.Provider value={storeRef.current}>
      {children}
    </NotificationsStoreContext.Provider>
  );
};

export const useNotificationsStore = () => {
  const context = useContext(NotificationsStoreContext);
  if (!context) {
    throw new Error(
      "useNotificationsStore must be used within a NotificationsStoreProvider"
    );
  }
  return context;
};
