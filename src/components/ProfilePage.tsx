'use client'

import { useState } from 'react'
import { MapPin, Mail, Calendar, Edit3, Save, X } from 'lucide-react'

interface ProfileData {
  name: string
  bio: string
  location: string
  email: string
  joinDate: string
}

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState<ProfileData>({
    name: 'Alex Johnson',
    bio: 'Full-stack developer passionate about creating beautiful and functional web applications. I love working with modern technologies and solving complex problems.',
    location: 'San Francisco, CA',
    email: 'alex@example.com',
    joinDate: 'January 2023'
  })
  
  const [editProfile, setEditProfile] = useState<ProfileData>(profile)

  const handleSave = () => {
    setProfile(editProfile)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditProfile(profile)
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-32 relative">
            <div className="absolute top-4 right-4">
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-2 transition-colors"
                >
                  <Edit3 size={20} className="text-white" />
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={handleSave}
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-2 transition-colors"
                  >
                    <Save size={20} className="text-white" />
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-2 transition-colors"
                  >
                    <X size={20} className="text-white" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Profile Content */}
          <div className="px-8 pb-8">
            {/* Avatar */}
            <div className="relative -mt-16 mb-6">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {(isEditing ? editProfile.name : profile.name).split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
            </div>

            {/* Name */}
            <div className="mb-4">
              {isEditing ? (
                <input
                  type="text"
                  value={editProfile.name}
                  onChange={(e) => setEditProfile({ ...editProfile, name: e.target.value })}
                  className="text-3xl font-bold text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-500 outline-none w-full"
                />
              ) : (
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{profile.name}</h1>
              )}
            </div>

            {/* Bio */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-700 mb-3">About</h2>
              {isEditing ? (
                <textarea
                  value={editProfile.bio}
                  onChange={(e) => setEditProfile({ ...editProfile, bio: e.target.value })}
                  rows={4}
                  className="w-full text-gray-600 leading-relaxed bg-transparent border border-gray-300 rounded-lg p-3 focus:border-blue-500 outline-none resize-none"
                />
              ) : (
                <p className="text-gray-600 leading-relaxed">{profile.bio}</p>
              )}
            </div>

            {/* Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin size={20} className="text-gray-400" />
                {isEditing ? (
                  <input
                    type="text"
                    value={editProfile.location}
                    onChange={(e) => setEditProfile({ ...editProfile, location: e.target.value })}
                    className="bg-transparent border-b border-gray-300 focus:border-blue-500 outline-none flex-1"
                  />
                ) : (
                  <span>{profile.location}</span>
                )}
              </div>
              
              <div className="flex items-center gap-3 text-gray-600">
                <Mail size={20} className="text-gray-400" />
                {isEditing ? (
                  <input
                    type="email"
                    value={editProfile.email}
                    onChange={(e) => setEditProfile({ ...editProfile, email: e.target.value })}
                    className="bg-transparent border-b border-gray-300 focus:border-blue-500 outline-none flex-1"
                  />
                ) : (
                  <span>{profile.email}</span>
                )}
              </div>
              
              <div className="flex items-center gap-3 text-gray-600">
                <Calendar size={20} className="text-gray-400" />
                <span>Joined {profile.joinDate}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Click the edit button to update your profile information
          </p>
        </div>
      </div>
    </div>
  )
}