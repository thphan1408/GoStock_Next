'use client'
import React from 'react'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ResponsiveContainer } from 'recharts'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
import { TrendingUp } from 'lucide-react'

interface Props {}

const data = [
  {
    month: 'Jan',
    desktop: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    month: 'Feb',
    desktop: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    month: 'Mar',
    desktop: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    month: 'Apr',
    desktop: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    month: 'May',
    desktop: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    month: 'Jun',
    desktop: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    month: 'Jul',
    desktop: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    month: 'Aug',
    desktop: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    month: 'Sep',
    desktop: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    month: 'Oct',
    desktop: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    month: 'Nov',
    desktop: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    month: 'Dec',
    desktop: Math.floor(Math.random() * 5000) + 1000,
  },
]

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#888888',
  },
} satisfies ChartConfig

export default function BarChartComp({}: Props) {
  return (
    <ResponsiveContainer width={'100%'} height={350}>
      <ChartContainer config={chartConfig}>
        <BarChart accessibilityLayer data={data}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dashed" />}
          />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </ResponsiveContainer>
  )
}
