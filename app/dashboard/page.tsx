"use client"
import { Stats } from "../../components/dashboard/stats";

export default function Page() {
  return (
    <Stats size={3} title="Total de Usuarios" value="17" showActions={true}/>
  )
}