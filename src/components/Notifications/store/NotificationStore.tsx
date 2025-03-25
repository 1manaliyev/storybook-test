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

interface NotificationStoreProviderProps {
  children: ReactNode;
}

export interface NotificationStoreContextType {
  components: { id: number }[];
  counter: number;
  addComponent: () => void;
  removeComponent: (id: number) => void;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  status: "success" | "warning" | "error" | "copied";
  setStatus: Dispatch<
    SetStateAction<"success" | "warning" | "error" | "copied">
  >;
  showNotifiсation: (
    status: "success" | "warning" | "error" | "copied",
    title: string,
    text: string
  ) => void;
}

const NotificationStoreContext = createContext<
  NotificationStoreContextType | undefined
>(undefined);

export const NotificationStoreProvider: React.FC<
  NotificationStoreProviderProps
> = ({ children }) => {
  const [components, setComponents] = useState<{ id: number }[]>([]);
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState("success");
  const [status, setStatus] = useState<
    "success" | "warning" | "error" | "copied"
  >("warning");
  const [text, setText] = useState("");

  const addComponent = useCallback(() => {
    setComponents((prev) => [...prev, { id: counter }]);
    setCounter((prev) => prev + 1);
  }, [counter]);

  const removeComponent = useCallback((id: number) => {
    setComponents((prev) => prev.filter((comp) => comp.id !== id));
  }, []);

  const showNotifiсation = useCallback(
    (
      newStatus: "success" | "warning" | "error" | "copied",
      newTitle: string,
      text: string
    ) => {
      setStatus(newStatus);
      setTitle(newTitle);
      setText(text);
      setComponents((prev) => [...prev, { id: counter }]);
      setCounter((prev) => prev + 1);
    },
    [counter]
  );

  const storeRef = useRef<NotificationStoreContextType>({
    components,
    counter,
    addComponent,
    removeComponent,
    title,
    setTitle,
    status,
    setStatus,
    showNotifiсation,
    text,
    setText,
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
    text,
    setText,
  };

  return (
    <NotificationStoreContext.Provider value={storeRef.current}>
      {children}
    </NotificationStoreContext.Provider>
  );
};

const useNotificationStore = () => {
  const context = useContext(NotificationStoreContext);
  if (!context) {
    throw new Error(
      "useNotificationStore must be used within a NotificationStoreProvider"
    );
  }
  return context;
};

export default useNotificationStore;
