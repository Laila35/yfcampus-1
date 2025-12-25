"use client";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectSubject({ onChange }) {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-full mt-1">
        <SelectValue placeholder="Select subject(s)" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Subjects</SelectLabel>
          <SelectItem value="maths">Maths</SelectItem>
          <SelectItem value="english">English</SelectItem>
          <SelectItem value="science">Science</SelectItem>
          <SelectItem value="computer">Computer Science</SelectItem>
          <SelectItem value="economics">Economics</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
