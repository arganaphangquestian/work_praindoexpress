import { useRouter } from "next/router";

const Tracking = () => {
  const router = useRouter();
  const { cn_number } = router.query;

  return <p>Tracking: {cn_number}</p>;
};

export default Tracking;
