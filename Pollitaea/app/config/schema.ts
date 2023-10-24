export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      address: {
        Row: {
          city: string | null
          id: number
          profile_id: string | null
          state: string | null
          street: string | null
          zip: string | null
        }
        Insert: {
          city?: string | null
          id?: never
          profile_id?: string | null
          state?: string | null
          street?: string | null
          zip?: string | null
        }
        Update: {
          city?: string | null
          id?: never
          profile_id?: string | null
          state?: string | null
          street?: string | null
          zip?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "address_profile_id_fkey"
            columns: ["profile_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      like_dislike: {
        Row: {
          content_id: string | null
          content_type: number | null
          created_at: string
          id: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          content_id?: string | null
          content_type?: number | null
          created_at?: string
          id?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          content_id?: string | null
          content_type?: number | null
          created_at?: string
          id?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "like_dislike_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      logs: {
        Row: {
          id: number
          log_date: string | null
          log_text: string | null
          performed_by: string
          performed_on: string | null
        }
        Insert: {
          id?: never
          log_date?: string | null
          log_text?: string | null
          performed_by: string
          performed_on?: string | null
        }
        Update: {
          id?: never
          log_date?: string | null
          log_text?: string | null
          performed_by?: string
          performed_on?: string | null
        }
        Relationships: []
      }
      poll_note: {
        Row: {
          content: string
          created_at: string
          dislikes: number
          id: string
          likes: number
          updated_at: string
          user_id: string | null
        }
        Insert: {
          content: string
          created_at?: string
          dislikes?: number
          id?: string
          likes?: number
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string
          dislikes?: number
          id?: string
          likes?: number
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "poll_note_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          external_url: string | null
          full_name: string | null
          id: string
          location: string | null
          role: Database["public"]["Enums"]["app_role"]
          tag: string | null
          username: string | null
          user_description: string | null
        }
        Insert: {
          avatar_url?: string | null
          external_url?: string | null
          full_name?: string | null
          id: string
          location?: string | null
          role?: Database["public"]["Enums"]["app_role"]
          tag?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          external_url?: string | null
          full_name?: string | null
          id?: string
          location?: string | null
          role?: Database["public"]["Enums"]["app_role"]
          tag?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      type_lookup: {
        Row: {
          content_type: number
          created_at: string
          id: number
          type_description: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          content_type: number
          created_at?: string
          id?: number
          type_description: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          content_type?: number
          created_at?: string
          id?: number
          type_description?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "type_lookup_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      user_description: {
        Args: {
          "": unknown
        }
        Returns: string
      }
    }
    Enums: {
      app_role: "STOCK" | "GOV" | "PREMIUM" | "ADMIN"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Profile = {
  avatar_url: string | null
  external_url: string | null
  full_name: string | null
  id: string
  location: string | null
  role: Database["public"]["Enums"]["app_role"]
  tag: string | null
  username: string | null
} | null
