/* eslint-disable @next/next/no-img-element */

import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

interface ThumbnailProps {
  url: string | null | undefined;
}

export const Thumbnail = ({ url }: ThumbnailProps) => {
  if (!url) return null;

  return (
    <Dialog>
      <DialogTrigger>
        <div className="relative overflow-hidden max-w-[360px] border rounded-lg my-2 cursor-pointer">
          <img
            src={url}
            alt="Message image"
            className="rounded-md objesct-cover size-full"
          />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[800px] border-none bg-transparent p-0 shadow-none">
      <img
            src={url}
            alt="Message image"
            className="rounded-md objesct-cover size-full"
          />
      </DialogContent>
    </Dialog>
  );
};