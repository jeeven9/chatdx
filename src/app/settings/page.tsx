import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Settings() {
  return (
    <main className="flex justify-center w-full h-full max-h-full pt-14 lg:pt-0 overflow-auto">
      <div className="w-full h-full p-10 sm:max-w-3xl">
        <div className="w-full pb-6">
          <h1 className="text-3xl font-semibold">Settings</h1>
        </div>
        <div className="flex flex-col gap-6 pb-4">
          <Card>
            <CardHeader>
              <CardTitle>Sources</CardTitle>
              <CardDescription>
                Select where to source information.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a Source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web">Web</SelectItem>
                  <SelectItem value="academia">Academia</SelectItem>
                  <SelectItem value="video">Video</SelectItem>
                  <SelectItem value="social">Social</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button>Save</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Temperature</CardTitle>
              <CardDescription>Set the temperature.</CardDescription>
            </CardHeader>
            <CardContent>
              <Slider defaultValue={[33]} max={100} step={1} />
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button>Save</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
