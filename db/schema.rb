# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170428185510) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "audios", force: :cascade do |t|
    t.integer  "sermon_id"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "sound_file_name"
    t.string   "sound_content_type"
    t.integer  "sound_file_size"
    t.datetime "sound_updated_at"
    t.index ["sermon_id"], name: "index_audios_on_sermon_id", using: :btree
  end

  create_table "communities", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.string   "address"
    t.integer  "user_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.date     "date"
    t.time     "time"
    t.index ["user_id"], name: "index_communities_on_user_id", using: :btree
  end

  create_table "episodes", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.integer  "users_id"
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
    t.string   "episode_thumbnail_file_name"
    t.string   "episode_thumbnail_content_type"
    t.integer  "episode_thumbnail_file_size"
    t.datetime "episode_thumbnail_updated_at"
    t.string   "mp3_file_name"
    t.string   "mp3_content_type"
    t.integer  "mp3_file_size"
    t.datetime "mp3_updated_at"
    t.index ["users_id"], name: "index_episodes_on_users_id", using: :btree
  end

  create_table "events", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.string   "address"
    t.integer  "user_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.datetime "start_date"
    t.datetime "end_date"
    t.date     "date"
    t.time     "time"
    t.float    "latitude"
    t.float    "longitude"
    t.index ["user_id"], name: "index_events_on_user_id", using: :btree
  end

  create_table "groups", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.string   "address"
    t.integer  "user_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.date     "date"
    t.time     "time"
    t.float    "latitude"
    t.float    "longitude"
    t.index ["user_id"], name: "index_groups_on_user_id", using: :btree
  end

  create_table "photos", force: :cascade do |t|
    t.integer  "event_id"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.string   "photoable_type"
    t.integer  "photoable_id"
    t.string   "picture"
    t.string   "picture_file_name"
    t.string   "picture_content_type"
    t.integer  "picture_file_size"
    t.datetime "picture_updated_at"
    t.integer  "sermon_id"
    t.integer  "communities_id"
    t.integer  "groups_id"
    t.string   "audio_file_name"
    t.string   "audio_content_type"
    t.integer  "audio_file_size"
    t.datetime "audio_updated_at"
    t.index ["communities_id"], name: "index_photos_on_communities_id", using: :btree
    t.index ["event_id"], name: "index_photos_on_event_id", using: :btree
    t.index ["groups_id"], name: "index_photos_on_groups_id", using: :btree
    t.index ["photoable_type", "photoable_id"], name: "index_photos_on_photoable_type_and_photoable_id", using: :btree
    t.index ["sermon_id"], name: "index_photos_on_sermon_id", using: :btree
  end

  create_table "reservations", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "event_id"
    t.datetime "start_date"
    t.datetime "end_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_reservations_on_event_id", using: :btree
    t.index ["user_id"], name: "index_reservations_on_user_id", using: :btree
  end

  create_table "sermons", force: :cascade do |t|
    t.string   "title"
    t.text     "summary"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.date     "date"
    t.time     "time"
    t.integer  "user_id"
    t.index ["user_id"], name: "index_sermons_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "fullname"
    t.string   "phone_number"
    t.text     "description"
    t.string   "title"
    t.text     "descrition"
    t.string   "itunes"
    t.string   "stitcher"
    t.string   "podbay"
    t.string   "thumbnail_file_name"
    t.string   "thumbnail_content_type"
    t.integer  "thumbnail_file_size"
    t.datetime "thumbnail_updated_at"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

  add_foreign_key "audios", "sermons"
  add_foreign_key "communities", "users"
  add_foreign_key "episodes", "users", column: "users_id"
  add_foreign_key "events", "users"
  add_foreign_key "groups", "users"
  add_foreign_key "photos", "communities", column: "communities_id"
  add_foreign_key "photos", "events"
  add_foreign_key "photos", "groups", column: "groups_id"
  add_foreign_key "photos", "sermons"
  add_foreign_key "reservations", "events"
  add_foreign_key "reservations", "users"
  add_foreign_key "sermons", "users"
end
