"use client";
import React from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const SelectTimeDuration = ({ onChange }) => {
  return (
    <div>
      <Label>Preferred Lesson Duration</Label>
      <Select onValueChange={onChange}>
        <SelectTrigger className="w-full mt-1">
          <SelectValue placeholder="Select duration" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="30">30 minutes</SelectItem>
          <SelectItem value="60">1 hour</SelectItem>
          <SelectItem value="90">1.5 hours</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectTimeDuration;
