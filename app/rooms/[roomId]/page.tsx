const RoomDetailPage = async ({
  params,
}: {
  params: Promise<{ roomId: string }>;
}) => {
  const slug = (await params).roomId;
  return (
    <div>
      <h1>Room {slug}</h1>
    </div>
  );
};

export default RoomDetailPage;
