import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
  rememberMe: z.boolean().default(false),
});

type FormData = z.infer<typeof formSchema>;

export default function LoginPage({ onLoginSuccess }: { onLoginSuccess: () => void }) {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('Login form submitted with data:', data);
    // Simulate API call
    setTimeout(() => {
      onLoginSuccess();
      toast({
        title: "Login Successful!",
        description: "You have been successfully logged in.",
      });
    }, 1000);
  };

  const { toast } = useToast();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card className="w-full max-w-sm shadow-lg mx-auto">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold text-center">Welcome to DietMaxx</CardTitle>
          <CardDescription className="text-center">Your personalized journey to a healthier you starts here.</CardDescription>
        </CardHeader>
        <CardContent className="py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input id="email" type="email" placeholder="m@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input id="password" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                    <div className="text-sm text-right">
                      <Link className="underline" href="#">
                        Forgot password?
                      </Link>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Remember me</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? 'Logging in...' : 'Login'}
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="#">Sign Up</Link>
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}