require 'test_helper'

class SermonsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get sermons_index_url
    assert_response :success
  end

  test "should get show" do
    get sermons_show_url
    assert_response :success
  end

  test "should get new" do
    get sermons_new_url
    assert_response :success
  end

  test "should get create" do
    get sermons_create_url
    assert_response :success
  end

  test "should get edit" do
    get sermons_edit_url
    assert_response :success
  end

  test "should get update" do
    get sermons_update_url
    assert_response :success
  end

end
